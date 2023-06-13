const Config = require("../models/config.model.js");

exports.checkAdminAuth=(req,res)=>{
    Config.checkAdminAuth(req.params.keystr,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error"
        });
       
        if (data[0].valuestr == req.params.valuestr)
            return  res.send("{\"result\":\"1\"}");
        else
            return  res.send("{\"result\":\"0\"}");
    });
};

