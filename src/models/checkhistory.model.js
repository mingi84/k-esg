const sql = require("./connect/db.js");

 const History = function(history){
    this.userID = history.userID;
    this.epoints = history.epoints;
    this.spoints = history.spoints;
    this.gpoints = history.gpoints;
    this.totalpoints = history.totalpoints;
 };

 //Question 모두 조회
 History.addHistory = (userID,epoints, spoints, gpoints, totalpoints,result)=>{
    sql.query('INSERT INTO checkhistory SET userID=?, epoints=?, spoints=?, gpoints=?, totalpoints=?',[userID, epoints, spoints, gpoints, totalpoints],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        result(null,res)
        console.log("insert into OK");
    });
};

module.exports = History;