const express=require("express");
const collection =require("./modalyou");
const cors=require("cors");
const app=express();
app.use(express.json);
app.use(cors());
app.use(express.urlencoded({extended:true}));


app.get("/",cors(),(req,res)=>{
   
})
app.post("/",async(req,res)=> {
    const{name,password}=req.body
    try{
        const check=await collection.findOne({name:name})
        if(check){
            res.json("exist");
        }
        else{
            res.json("not exist");
        }
    }
    catch(e){
        console.log(e); 
        res.json("not exist");
    }
})




 
app.post("/RegistrationForm",async(req,res)=> {
    const{name,password}=req.body
    const data={
        name:name,
        password:password
    }
    try{
        const check=await collection.findOne({name:name})
        if(check){
            res.json("exist");
        }
        else{
            res.json("not exist");
            await collection.insertMany([data])
        }
    }
    catch(e){
        console.log(e); 
        res.json("not exist");
    }
})


app.listen(8000,()=>{
    console.log("port connected");
})