const Quest = require("../models/question.model.js");

exports.findAll=(req,res)=>{
    Quest.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error"
        });
        else res.send(data);
    });
};