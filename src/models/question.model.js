const sql = require("./connect/db.js");

 const Question = function(question){
    this.questionstr = question.questionstr;
    this.answer = question.answer;
    this.SCQID = question.SCQID;
    this.type = question.type;
 };

 //Question 모두 조회
Question.getAll = result=>{
    sql.query('SELECT * FROM question',(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};

module.exports = Question;