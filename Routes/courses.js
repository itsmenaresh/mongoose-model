const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const courseSchema = new mongoose.Schema({
    name: String,
    tags: [ String ],
    author: String,
    isPublished: Boolean,
    price: Number,
    date: { type: Date, default: Date.now }
});

const Courses = mongoose.model("Course", courseSchema);

router.get("/courses", (req, res) => {
    // Courses.find({isPublished: true, tags: { $in: ["frontend", "backend"]}})
    Courses.find({isPublished: true, price: { $gte: 15}})
    // .or([{ tags: "frontend"}, { tags: "backend"}])
    .sort("-price")
    // .select({name: 1, author: 1, price: 1})
    .select("name author price")
    .then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;