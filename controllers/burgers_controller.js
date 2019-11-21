const express = require("express");
var router = express.Router();
const burger = require("../models/burger");


router.get("/", function (req, res) {

    burger.selectAll(function (data) {
let burgerHandle = {data: data}
        console.log(burgerHandle);
        res.render("index", burgerHandle)
    })
})

router.post("/api/burgers", function (req, res) {
console.log(req.body);
    burger.insertOne("burger_name", req.body.burger_name, function (data) {

    })
})

router.put("/api/burgers/:id", function (req, res) {

    let burgerId = req.params.id;

    burger.updateOne({ burger_name: req.body.name }, burgerId, function (data) {

        
        // if (data.changedRows === 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        // }
    //    res.render("/")


    })
})

module.exports = router;