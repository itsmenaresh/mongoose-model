const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/courses");

mongoose.connect("mongodb://localhost/mongo-exercises")
.then(resp => console.log("connected to db"))
.catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(3000, () => console.log("app running 3000"));