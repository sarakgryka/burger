const connection = require("./connection")


let orm = {

    selectAll: function (table, cb) {
        let sqlQuery = `SELECT * FROM ${table} ;`

        connection.query(sqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result)
            cb(result);
        });
    },


    insertOne: function (table, column, value, cb) {

        console.log(value);
        let sqlQuery = `INSERT INTO ${table}(${column}) VALUE("${value}")`

        console.log(sqlQuery)
        connection.query(sqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result)
            cb(result);
        })


    },


    updateOne: function (table, rowId, cb) {


        let sqlQuery = `UPDATE ${table} SET devoured=true WHERE id=${rowId};`
        console.log(sqlQuery);
        connection.query(sqlQuery, function (err, result) {
            if (err) {
                throw err;

            }

            cb(result);
        })


    }

}

// orm.selectAll("burgers", function () {

// })

// orm.insertOne("burgers", "burger_name", "value", function () {

// })

// orm.updateOne("burgers", {burger_name: "Pineapple Express1"}, {id: 1} , function () {

// })

module.exports = orm;