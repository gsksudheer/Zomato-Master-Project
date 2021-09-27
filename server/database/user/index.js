import  mongoose  from "mongoose";
import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
    fullname: { type: String, require: true },
    email: { type: String, require: true},
    password: { type: String },
    address: [{detail: { type: String}, for: {  type: String }}],
    phoneNumber: [{ type: Number }],
 },
 {
    timestamps: true,
 });

 UserSchema.methods.generateJwtToken = function () {
    return Jwt.sign({ user: this._id.toString() }, "ZomatoApp");
 };

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
   //check whether email exists or not
   const checkUserByEmail = await UserModel.findOne({ email });//{ email: email }== {email}
   const checkUserByPhone = await UserModel.findOne({ phoneNumber });

   if(checkUserByEmail || checkUserByPhone) {
       throw new Error("user already exist");
   }
   return false;
};

UserSchema.statics.findByEmailAndPassword = async({ email, password }) => {
   //check email exist
   const user = await UserModel.findOne({ email });
   if(!user) throw new Error("User does not exist");

   //compare password with the hashed password
   const doesPasswordMatch = await bcrypt.compare( password, user.password );
   if(!doesPasswordMatch) throw new Error("invalid password");

   return user;

};

//pre is a function that runs at a particular stage
UserSchema.pre("save", function(next) {
   const user = this;
   //password is modified
   if(!user.isModified("password")) return next();
   // generate bcrypt salt
   bcrypt.genSalt(8, (error ,salt) => {
      if(error) return next(error);
      //hash the password
      bcrypt.hash(user.password, salt, (error, hash) => {
         if(error) return next(error);

         //assigning the hashed password
         user.password = hash;
         return next();
      });
   });
});

//conver to Model
export const UserModel = mongoose.model("Users", UserSchema);
