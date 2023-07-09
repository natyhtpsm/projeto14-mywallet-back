import express from "express";
import cors from "cors";
import SignUpRoutes from "./routers/signUpRouters.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(SignUpRoutes);

app.listen(5000, () => {console.log("Server is running on port 5000")});


