import express from "express";

//import routers from route module
//import ProductRouter from "./Modules/Products/Infrastructure/Routes/product.route";

//create a new express server
const AppServer = express();

// set a new port and type of http request
AppServer.set("port", 4000);
AppServer.use(express.json());


// API ENDPOINTS
//AppServer.use("/api/v1/products", )


//export the appserver
export default AppServer;


