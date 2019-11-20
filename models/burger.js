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

        orm.updateOne("burgers", newInfoObj, rowId, function(res){

            cb(res)
        })
    }


}

module.exports = burger;