const maria = require('mysql');

const conn = maria.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'_media_',
    database:'kesg'
})

module.exports = conn;