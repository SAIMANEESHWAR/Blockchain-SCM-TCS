const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://sai_maneeshwar:saimanee@cluster0.c86tmm2.mongodb.net/SCM?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("mongo not connected");
})


const sschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    metamaskaccount:{
        type:String,
        require:true
    }
})


const sschema2=new mongoose.Schema({
    divid:{
        type:String,
        required:true
    },
    
    unitid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    metamaskaccount:{
        type:String,
        require:true
    }
})
const sschema3=new mongoose.Schema({
    myid:{
        type:String,
        required:true
    },
    divid:{
        type:String,
        required:true
    },

    gas:{
        type:String,
        required:true
    },
    
    id:{
        type:String,
        required:true
    },
    from:{
        type:String,
        require:true
    },
    to:{type:String,
        require:true
    }

    ,block:{type:String,
        require:true
    },
    purpose:{type:String,
             require:true
    },
    date:{type:String,
    require:true
    }

    
})

const sschema4=new mongoose.Schema({
  
    divid:{
        type:String,
        required:true
    },

    gas:{
        type:String,
        required:true
    },
    
    id:{
        type:String,
        required:true
    },
    from:{
        type:String,
        require:true
    },
    to:{type:String,
        require:true
    }

    ,block:{type:String,
        require:true
    },
    purpose:{type:String,
        required:true
    },
    date:{type:String,
    require:true
    }

    
})

const sschema5=new mongoose.Schema({
  
    ascid:{
        type:String,
        required:true
    },

    gas:{
        type:String,
        required:true
    },
    
    id:{
        type:String,
        required:true
    },
    from:{
        type:String,
        require:true
    },
    to:{type:String,
        require:true
    }

    ,block:{type:String,
        require:true
    },
    purpose:{type:String,
        required:true
    },
    date:{type:String,
    require:true
    }

    
})
const collection2=mongoose.model("collection2",sschema2);
const collection=mongoose.model("collection",sschema);
const collection3=mongoose.model("collection3",sschema3);
const collection4=mongoose.model("collection4",sschema4);
const collection5=mongoose.model("collection5",sschema5)
const arr=[collection,collection2,collection3,collection4,collection5];
module.exports=arr;