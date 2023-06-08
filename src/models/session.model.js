const sql = require("./connect/db.js");

 const Session = function(session){
    this.ID = session.ID;
    this.name = session.name;
 };

 //Question 모두 조회
 Session.findSession = (ID,result)=>{
    sql.query('SELECT name FROM session WHERE ID=?',ID,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};

module.exports = Session;