// Importing ENV variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
//cross origin request -it uses for security purpose the server should al 
// helmet - it will add few layers of security

//Configs
import routeConfig from "./Config/route.config";

//MicroService Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Order from "./API/orders";
import Reviews from "./API/reviews";


//Database Connection
import ConnectDB from "./database/connection";
import passport from "passport";

const zomato = express();

// Applications middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet());


// passport configuration
routeConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);


zomato.get("/", (req, res) => res.json({message:"setup successfull"}));

zomato.listen(3000, () =>
 ConnectDB()
 .then(() => console.log("Server is Running"))
 .catch(() => console.log("Server is running but database connection failed"))
);


