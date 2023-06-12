const History = require("../models/checkhistory.model.js");

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"
        });
    };

    const hist = new History({
        userID : req.body.userID,
        epoints : req.body.epoints,
        spoints : req.body.spoints,
        gpoints : req.body.gpoints,
        totalpoints : req.body.totalpoints
    });

    History.addHistory(hist.userID,hist.epoints,hist.spoints,hist.gpoints,hist.totalpoints,(err,data)=>{
        if(err){
            res.status(500).send({
                message:
                err.message||"Some error occured while creating the Checkhistory"
            });
        };
        res.send("{\"result\":\"1\"}");
    })
};

exports.findAll=(req,res)=>{
    History.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error"
        });
        else res.send(data);
    });
};