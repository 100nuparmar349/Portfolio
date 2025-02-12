const express = require("express");
const cors = require("cors");
const app = express();
const User=require("./Model/User.js");
const mongoose=require("mongoose")
const PORT = 4000;

// app.use(cors({
//    origin: "https://portfolio-sonu-parmars-projects.vercel.app/contact", // Apna frontend URL
//    methods: "GET, POST, PUT, DELETE",  // Allowed HTTP methods
//    credentials: true
//  }));

app.use(express.json()); // Allows JSON data in requests

app.use(express.urlencoded({ extended: true }));


// MongoDB Connection
// mongoose.connect("mongodb+srv://sonuparmar757598:<db_password>@cluster0.otplw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>console.log("MongoDB Connected Successfully"))
// .catch((err)=>console.log("MongoDb Connnection Failed",err));

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.log("❌ MongoDB Connection Failed:", err));

 app.use(cors({
   origin: process.env.FRONTEND_URL || "*",  

   methods: "GET, POST, PUT, DELETE",
   credentials: true
 }));

 app.get("/",(req,res)=>{
  res.json({message:"Run succefully on vercel"})
 })
// Your POST route
app.post("/contact", async (req, res) => {
  console.log(req.body); // Check if the data is correctly received
 try{
    const {name,Email,message}=req.body;
    const newUser=new User({name,Email,message});
    newUser.save();
    res.json({ success: true, message: "Feedback saved successfully" });
 }catch(err){
    console.log("Error occurred",err);
 }
// res.json({success:true,message:"Feedback"});
});

// Start Server

 
app.listen(PORT, () => {
    console.log("Server is Runnig");
 console.log(`Server is running on http://localhost:${PORT}`);
});

module.export=app;