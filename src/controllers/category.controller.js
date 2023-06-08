const Category = require("../models/category.model.js");

exports.findCategory=(req,res)=>{
    Category.findCategory(req.params.sessionID,(err,data)=>{
        if(err){
            if(err.kind ==="not_found"){
                res.status(404).send({
                    message:'Not found Session Name with ID ${req.params.sessionID}.'
                });
            }else{
                res.status(500).send({
                    message:"Error retrieving Session with ID"+req.params.sessionID
                });
            }
        }else res.send(data);
    });
}; 