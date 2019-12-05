// 加载mysql插件
var mysql = require('mysql');

exports.base = (sql, date, callback) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'play'
    });
    connection.connect();

    connection.query(sql, date, function(error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();

}