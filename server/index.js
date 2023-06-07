const express=require('express');
const app=express();
const dotenv=require('dotenv');
const {urlencoded}=require('body-parser');
const mongoose=require('mongoose');
const route=require('./routes/routes');

dotenv.config();

console.log(process.env.connection);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',route);
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.connection);
        console.log("connected to Database");
    }catch(err){
        console.error("Error Connecting to Database:",err);
    }
};
app.listen(3005,()=>{
    connectDB();
    console.log("Listening on port 3005");
});
