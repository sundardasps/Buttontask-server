import express from "express";
const app = express();
import cors from "cors";
import env from 'dotenv'
import mongoose from "mongoose";
import {buttonFetch,buttonAction,createButton} from './controller/userController.js'
import auth from './middlewares/auth.js'
env.config()
mongoose.connect(process.env.MONGO_SERVER,{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json());

app.use(
  cors({
    methods:["GET","POST"],
    origin: "*",
  })
);

app.get("/v2/location/:locationId/contacts/detail/:contactId",auth,buttonFetch); 
app.get("/v2/location/:locationId/contacts/detail/:contactId/:action",auth,buttonAction); 

app.listen(process.env.SERVER_PORT, () => {
  console.log("server connected!");
});
