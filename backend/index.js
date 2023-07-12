// const express=require('express');
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// const cors = require("cors");
// const app = express();
// const Rschema = require("./modal");

// app.listen(5000, () => {
//     console.log("server running...");
//   });
  
// mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
//   console.log("DB connected...");
// });


// app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.get("/getregister", async (req, res) => {
//     try {
//       return res.json(await Rschema.find());
//     } catch (err) {
//       console.log(err);
//     }
//   });

const express=require("express");
const arr =require("./modalyou");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const nodemailer = require('nodemailer');
app.use(express.urlencoded({extended:true}));

const collection=arr[0];
const collection2=arr[1];
const collection3=arr[2];
const collection4=arr[3];
const collection5=arr[4];

app.post("/Logindiv",async(req,res)=> {
    const{divid,password}=req.body
    try{
        const check=await collection.findOne({name:divid, password: password});


        if(check){
          const responseObj = {
            checkeddata: check,
            statement: "Datafound"
          };
            res.json(responseObj);
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




 
app.post("/Registration/Nesteddivision",async(req,res)=> {
  console.log(req.body)
    const{divid,password,metamaskaccount}=req.body
    const data={
        name:divid,
        password:password,
        metamaskaccount:metamaskaccount
    }
    try{
      console.log(data)
        const check=await collection.findOne({name:divid})
        if(check){
            res.json("The id is already exist");
        }
        else{
            res.json("Registered successfully");
            await collection.insertMany([data])
        }
    }
    catch(e){
        console.log(e); 
        res.json("notexist");
    }
})



// app.post("/Loginunits",async(req,res)=> {
//     const{divid,unitid,password}=req.body
//     try{
//         const check=await collection2.findOne({divid:divid,unitid:unitid ,password: password});
        
//         const query = { divid: 1 };
//         const projection = { unitid: 1 }; // Only retrieve unitid field
//         const result = await collection2.find(query, projection).toArray();
  
//         const responseObj = {
//             data2: 45,
//             statement: "Datafound"
//           };
//         if(check){
//             res.json(responseObj);
//         }
//         else{
//             res.json("not exist");
//         }
//     }
//     catch(e){
//         console.log(e); 
//         res.json("not xist");
//     }
// })
app.post("/Loginunits", async (req, res) => {
    const { divid, unitid, password } = req.body;
  
    try {
      const check = await collection2.findOne({
        divid: divid,
        unitid: unitid,
        password: password
      });
     
  
      if (check) {
        const responseObj = {
          checkeddata: check,
          statement: "Datafound"
        };
        res.json(responseObj);
      } else {
        res.json("not exist");
      }
    } catch (e) {
      console.log(e);
      res.json("not exist");
    }
  });
  






 
app.post("/Registration/Nestedunit",async(req,res)=> {
    console.log(req.body)
      const{divid,unitid,password,metamaskaccount}=req.body
      const data={
          divid:divid,
          unitid:unitid,
          password:password,
          metamaskaccount:metamaskaccount
      }
      try{
        console.log(data)
          const check=await collection2.findOne({divid:divid,unitid:unitid})
          if(check){
              res.json("exist");
          }
          else{
              res.json("not exist");
              await collection2.insertMany([data])
          }
      }
      catch(e){
          console.log(e); 
          res.json("notexist");
      }
  })
  


  app.post("/Divnewreq", async (req, res) => {
    const { div } = req.body;
  
    try {
      
         
        const result = await collection2.find({ divid: div });
       
      const responseObj = {
        data267: result,
        statement: "Datafound"
      };
  
     
        res.json(responseObj);
      
    } catch (e) {
      console.log(e);
      res.json("notxist");
    }
  });
  

  app.post("/sai",async(req,res)=> {
    console.log(req.body)
      const{ myid,divid,gas,id,from ,to,block,purpose,date}=req.body
      const data={
       myid,divid, gas,id,from ,to,block,purpose,date
      }
      try{
        
              await collection3.insertMany([data])
        res.json("success");
      }
      catch(e){
          console.log(e); 
          res.json("not");
      }
  })
  


  app.post("/transactionget",async(req,res)=> {
    console.log(req.body)
      const{divid,unitid}=req.body
      
      try{
        const result = await collection3.find({ myid:unitid ,divid: divid });
       
      const responseObj = {
        data267: result,
        statement: "Datafound"
      };
  
     
        res.json(responseObj);
      }
      catch(e){
          console.log(e); 
          res.json("notexist");
      }
  });
  




  app.post("/divtransaction",async(req,res)=> {
    console.log(req.body)
      const{ divid,gas,id,from ,to,block,purpose,date}=req.body
      const data={
       divid, gas,id,from ,to,block,purpose,date
      }
      try{
        
              await collection4.insertMany([data])
        res.json("success");
      }
      catch(e){
          console.log(e); 
          res.json("not");
      }
  })


  app.post("/divtransactionget",async(req,res)=> {
    console.log(req.body)
      const{divid}=req.body
      
      try{
        const result = await collection4.find({divid: divid });
       
      const responseObj = {
        data267: result,
        statement: "Datafound"
      };
  
     
        res.json(responseObj);
      }
      catch(e){
          console.log(e); 
          res.json("notexist");
      }
  });
  

  app.post("/asctransaction",async(req,res)=> {
    console.log(req.body)
      const{ ascid,gas,id,from ,to,block,purpose,date}=req.body
      const data={
       ascid, gas,id,from ,to,block,purpose,date
      }
      try{
        
              await collection5.insertMany([data])
        res.json("success");
      }
      catch(e){
          console.log(e); 
          res.json("not");
      }
  })


  app.post("/asctransactionget",async(req,res)=> {
    console.log(req.body)
      const{divid,unitid}=req.body
      
      try{
        const result = await collection5.find({ myid:unitid ,divid: divid });
       
      const responseObj = {
        data267: result,
        statement: "Datafound"
      };
  
     
        res.json(responseObj);
      }
      catch(e){
          console.log(e); 
          res.json("notexist");
      }
  });
  


//jwt

// const maxAge=60*60*1000;
// const createToken=(id)=>{
//   return jwt.sign({id},"lavda");
// };

// app.get("/Loginunits/:divid/:unitid/:password", async (req, res) => {
//     const { divid, unitid, password } = req.params;
  
//     try {
//       const check = await collection2.findOne({
//         divid: divid,
//         unitid: unitid,
//         password: password
//       });
     
  
//       if (check) {
//         const token=createToken(check._id);
//         console.log(token);
//         // res.cookie('jwt',token,{withCredentials:true,httpOnly:false});
//         res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
//         const responseObj = {
//           checkeddata: check,
//           statement: "Datafound"
//         };
//         res.json(responseObj);
//       } else {
//         res.json("not exist");
//       }
//     } catch (e) {
//       console.log(e);
//       res.json("not exist");
//     }
//   });
  

//loginunits

// await axios.get(`http://localhost:8000/Loginunits/${divid}/${unitid}/${password}`              
// ).then(res => {
//     console.log(res.data);
//     console.log(res.cookie);


//email


// const transporter = nodemailer.createTransport({
//   auth: {
//     user: 'saimanee457@gmail.com',
//     pass: 'saimanee@123'
//   },
// });
// // Endpoint to send email
// app.get('/send-email', (req, res) => {

//   const { recipient, subject, message } = req.query;


//   // Email options
//   const mailOptions = {
//     from: 'saimanee457@gmail.com',
//     to: recipient,
//     subject,
//     text: message,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });


app.listen(8000,()=>{
  console.log("port connected");
})
