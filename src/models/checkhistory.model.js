const sql = require("./connect/db.js");

 const History = function(history){
    this.userID = history.userID;
    this.epoints = history.epoints;
    this.spoints = history.spoints;
    this.gpoints = history.gpoints;
    this.totalpoints = history.totalpoints;
 };

 //addHistory
 History.addHistory = (userID,epoints, spoints, gpoints, totalpoints,result)=>{
    sql.query('INSERT INTO checkhistory SET userID=?, epoints=?, spoints=?, gpoints=?, totalpoints=?, checkdate=now()',[userID, epoints, spoints, gpoints, totalpoints],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        result(null,res)
        console.log("insert into OK");
    });
};

 //History 모두 조회
 History.getAll = result=>{
    sql.query('SELECT * FROM checkhistory',(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};

module.exports = History;