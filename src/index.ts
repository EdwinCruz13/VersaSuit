import AppServer from "./appserver";

console.log(AppServer.get("port"))

//initialize the server
AppServer.listen(AppServer.get("port"), () => {
    console.log(`Server on port ${AppServer.get("port")}`);
});