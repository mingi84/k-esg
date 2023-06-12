module.exports = app =>{
    const user = require("../controllers/userinfo.controller.js");

     // 유저정보 생성
     app.post("/userinfosql", user.create);
     app.get("/userinfobyID/:userID",user.findUserByID);
     app.get("/userinfoall",user.findAll);
};