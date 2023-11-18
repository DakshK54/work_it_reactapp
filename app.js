const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const mongourl = "mongodb+srv://VaginaMonkeys:password@workit-userinfo.pq4uqf0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongourl,{ useNewUrlParser:true}).then(()=>{console.log("Connected to database");}).catch(e=>console.log(e))

app.listen(5000, () => {
    console.log("server started");
});

app.post("/post",async (req,res) => {
    console.log(req,body);
    const {data} = req.body;

    try {
        if(data  == "cyka blyat"){
            res.send({status: "ok"});
        }
        else{
            res.send({status: "User Not Found"});
        }
    }
        
    catch(error) {
        s.send({status: "Something went wrong, try again..."});
    }
})