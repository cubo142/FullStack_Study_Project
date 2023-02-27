import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";
require('dotenv').config();
//bodyParser lấy các tham số từ client
//vd /user?id=7

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    //callback
    console.log("Backend nodejs is running on port: " + port)
})