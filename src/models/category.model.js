const sql = require("./connect/db.js");

 const Category = function(category){
    this.ID = category.ID;
    this.name = category.name;
    this.sessionID = category.sessionID;
 };

 //Question 모두 조회
 Category.findCategory = (ID,result)=>{
    sql.query('SELECT * FROM category WHERE sessionID=?',ID,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};

module.exports = Category;