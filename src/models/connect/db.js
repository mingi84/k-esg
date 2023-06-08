const maria = require("mysql");
const dbConfig = require("../connect/db.config.js");

const conn = maria.createConnection({
    host:dbConfig.host,
    port:dbConfig.port,
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.database
});

conn.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database.");
})

module.exports = conn;