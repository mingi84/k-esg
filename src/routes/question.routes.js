module.exports = app =>{
    const question = require("../controllers/question.controller.js");

    // 전체 조회 
    app.get("/questionssql", question.findAll);
};