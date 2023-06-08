module.exports = app =>{
    const session = require("../controllers/session.controller.js");

    // 전체 조회 
    app.get("/sessionsql/:sessionID", session.findSession);
};