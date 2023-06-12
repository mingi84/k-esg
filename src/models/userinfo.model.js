const sql = require("./connect/db.js");

 const UserInfo = function(user){
    this.name = user.name;
    this.company = user.company;
    this.phone = user.phone;
    this.email = user.email;
 };

 //Question 모두 조회
 UserInfo.addUser = (name,company,phone,email,result)=>{
    console.log("UserInfo.addUser");
    sql.query('INSERT INTO userinfo SET name=?, company=?, phone=?, email=?',[name,company,phone,email],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        result(null,res);
        return;
    });
};

UserInfo.getUser = (name,company,phone,email,result)=>{
    sql.query('SELECT ID FROM userinfo WHERE name=? and company=? and phone=? and email=?',[name,company,phone,email],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        result(null,res);
        return;
    }); 
};

UserInfo.getAll = result=>{
    sql.query('SELECT * FROM userinfo',(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        console.log("found");
        result(null,res)
    });
};



module.exports = UserInfo;