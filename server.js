import express from "express";
import routes from "./src/routes/routes.js";

const app = express();

app.use(express.json());

routes(app);

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});