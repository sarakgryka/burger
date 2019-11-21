const orm = require("../config/orm");

let burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {

            cb(res)
        })

    },

    insertOne: function (column, value, cb) {
        orm.insertOne("burgers", column, value, function (res) {
            cb(res);




        })

    },


updateOne: function (newInfoObj, rowId, cb) {
console.log("rowID:" + rowId)
        orm.updateOne("burgers", rowId, function(res){

            cb(res)
        })
    }


}

module.exports = burger;