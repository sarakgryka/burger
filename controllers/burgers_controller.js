const express = require("express");
var router = express.Router();
const burger = require("../models/burger");


router.get("/", function (req, res) {

    burger.selectAll(function (data) {

        console.log(data);
        res.render("index", data)
    })
})

router.post("/api/burgers", function (req, res) {

    burger.insertOne("burger_name", req.body.name, function (data) {

        res.json(data)
    })
})

router.put("/api/burgers/:id", function (req, res) {

    let burgerId = req.params.id;

    burger.updateOne({ burger_name: req.body.name }, burgerId, function (data) {


        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();


    })
})

module.exports = router;