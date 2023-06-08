module.exports = app =>{
    const history = require("../controllers/checkhistory.controller.js");

     // 이력 생성
     app.post("/checkhistorysql", history.create);
};