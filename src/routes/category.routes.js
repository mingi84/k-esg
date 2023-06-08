module.exports = app =>{
    const category = require("../controllers/category.controller.js");

    // 전체 조회 
    app.get("/categorysql/:sessionID", category.findCategory);
};