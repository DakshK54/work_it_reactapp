const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
const ReactDOMServer = require('react-dom/server');
const React = require('react');


app.get("/", cors(), (req, res)=>{

})

app.post("/login", async(req, res)=>{
    const{username, password} = req.body
    try{
        const check = await collection.findOne({username:username, password:password})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch{
        res.json("notexist")
    }
})

app.post("/signup", async(req, res)=>{
    const{username, password} = req.body
    const data = {
        username:username,
        password:password
    }
    try{
        const check = await collection.findOne({username:username})
        if(check){
            res.json("exist")
        }
        else{
            await collection.insertMany([data])
            res.json("notexist")
        }
    }
    catch{
        res.json("notexist")
    }
})

app.post("/mainpage", async (req, res)=> {
    res.json("exist")
});

app.listen(3000, ()=>{
    console.log("port connected");
})
