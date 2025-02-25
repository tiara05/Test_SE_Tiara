const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./routes/employeeRoutes");


dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoutes);
app.use("/name", userRoutes);
app.use("/employee", userRoutes);

app.listen(PORT, ()=>{
    console.log("Server OK");
});