const mongoose=require("mongoose")

let schema=mongoose.Schema({
    rating:{type:String},
    Comment:{type:String},
    product_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    
    }


    

})

let comment=mongoose.model("feedback",schema)

module.exports={comment}