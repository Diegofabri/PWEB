module.exports = function(app){
    app.get('/informacao/professores', function(req,res){

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "password",
            database: "site_fatec"
        });

        connection.connect(function(err) {
            if (err) throw err;
                console.log("Connected!");
        });

        connection.query('select * from professores', function (err, results) {
            if (err){
                console.log(err);
                res.send(err);
                return;
            }
            res.send(results);
        });
        //res.render('informacao/professores');
    });

};