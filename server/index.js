const express=require('express')
const app=express();
const User=require('./Model/User.js')
const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio?directConnection=true")
    .then(() => console.log("Connected to the DB"))
    .catch(err => console.error("DB Connection Error:", err));

app.use(express.json())

app.get("/", (req, res) => {
    const {name,Email,message}=req.body;
    
    res.send("Data recieved ");
});
const Port=4000;
app.listen(Port,()=>{
console.log(`Server is running on http://localhost:${Port}`);
})