//Libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer"; //multer : to process image sent by user

//DataBase Model
import ImageModel from "../../database/allModels";

//Utilities
import s3Upload from "../../Utils/AWS/s3";
import s3Bucket from "../../Utils/AWS/s3";
const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

 //AWs s3 bucker config
/* const s3Bucket = new AWS.S3({
    accessKeyId : process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey : process.env.AWS_S3_SECRET_KEY,
    region : "ap-south-1",
}); 
 */
/* 
Route       : /
Description : upload given image into AWS S3-Bucket, and Save file link to mongoDB
Parmas      : none
Access      : Public
Method      : POST
*/

Router.post("/", upload.single("file") , async (req, res) => {
     //upload.array("file", 4) uploading array of images with limit

    try {
        const file = req.file; //files because of many images
        
        //S3 Bucket Options
        const bucketOptions = {
            Bucket : "zomatoproject7",
            Key: file.originalname,
            Body: file.buffer, //buffer is ram(memory )
            ContentType: file.mimetype,
            ACL: "public-read", //Access Control List
        };

        const s3Upload = (options) => {
            return new Promise((resolve, reject) => {
                s3Bucket.upload(options, (error, data) => {
                    if(error) return reject(error);
                    return resolve(data);
                });
            });
        }

        const uploadImage = await s3Upload(bucketOptions);
        return res.status(200).json({uploadImage});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route       : /
Description : Get Image details
Parmas      : _id
Access      : Public
Method      : GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;