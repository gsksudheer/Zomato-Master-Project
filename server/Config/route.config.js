import passport from "passport";
import JwtPassport from "passport-jwt";

//DataBase Model
import { UserModel } from "../database/user";


const JwtStratergy = JwtPassport.Strategy;
const EtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp", 
};
export default (passport) => {
    passport.use(new JwtStratergy(options, async(jwt_payload, done) => {
        try{
            const doesUserExist = UserModel.findById(jwt_payload.user);
            if(!doesUserExist) return  done(null, false);
            return done(null, user);
        } catch (error) {
            throw new Error(error);
        }
    }));
};