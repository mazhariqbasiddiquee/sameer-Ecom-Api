const mongoose=require("mongoose")

let schema=mongoose.Schema({
    category:{type:String},
    title:{type:String},
    price:{type:String},
    description:{type:String},
    thumbnail:{type:String},
    images:{type:[String]},
    details:[{Fabric:String,Color:String,Fit:String,Length:String,Stretch:String}],
 })

let product=mongoose.model("product",schema)

module.exports={product}