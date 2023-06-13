module.exports = app =>{
    const config = require("../controllers/config.controller.js");

     // 이력 생성
     app.get("/config/:keystr&:valuestr",config.checkAdminAuth);
};