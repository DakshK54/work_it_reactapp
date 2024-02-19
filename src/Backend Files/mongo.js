const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/test2', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})


.then(()=>{
    console.log("mongodb connected");
})

.catch((error) => {
    console.error("mongodb connection failed", error);
});

const newSchema = new mongoose.Schema({
    username:{
        type:String, 
        required:true
    },
    password:{
        type:String, 
        required:true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection