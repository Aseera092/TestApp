const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")

const{testmodel}=require("./model/test")

const app=express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://aseera:aseera@cluster0.x0tifel.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>
    {
    let input=req.body
    let test=new testmodel(input)
    test.save()
    console.log(input)
    res.json({"status":"success"})

})

app.post("/Search",(req,res)=>{
    let input=req.body
})


app.post("/Viewall",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
   
})

app.listen(8080,()=>{
    console.log("server started")
})