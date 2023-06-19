const sql = require("./connect/db.js");

const Config = function(config){
    this.key = config.key;
    this.value = config.value;
};

Config.checkAdminAuth = (key,result)=>{
    console.log(key);
    sql.query('SELECT valuestr FROM config WHERE keystr=?',key,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};


module.exports = Config;