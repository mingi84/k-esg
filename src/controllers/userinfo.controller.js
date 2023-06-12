const UserInfo = require("../models/userinfo.model.js");

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"
        });
    };

    const user = new UserInfo({
        name : req.body.name,
        company : req.body.company,
        phone : req.body.phone,
        email : req.body.email
    });

    UserInfo.getUser(user.name,user.company,user.phone,user.email,(err,data)=>{
        if(err){
            return res.status(500).send({
                message:
                err.message||"Some error occured while creating the addUser"
            });
        };

        if(data.length==0){
            UserInfo.addUser(user.name,user.company,user.phone,user.email,(err,data)=>{
                if(err){
                    return res.status(500).send({
                        message:
                        err.message||"Some error occured while creating the addUser"
                    });
                };
                UserInfo.getUser(user.name,user.company,user.phone,user.email,(err,data)=>{
                    if(err){
                        return res.status(500).send({
                            message:
                            err.message||"Some error occured while creating the addUser"
                        });
                    };
            });
        });
        }
        return res.send(data);
    });
};

exports.findAll=(req,res)=>{
    UserInfo.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error"
        });
        else res.send(data);
    });
};