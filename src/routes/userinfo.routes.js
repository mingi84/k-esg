module.exports = app =>{
    const user = require("../controllers/userinfo.controller.js");

     // 유저정보 생성
     app.post("/userinfosql", user.create);
};