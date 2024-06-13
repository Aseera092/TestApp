const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "name":String,
        "rollno":String,
        "date":String,
        "college":String
    }
)
let testmodel=mongoose.model("test",Schema);
module.exports={testmodel}