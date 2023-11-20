const express=require("express")
const {comment}=require("../models/models.feedback")
const commentRouter=express.Router()



commentRouter.get("/",async(req,res)=>{
    try{
        let data=await comment.find()
        res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

commentRouter.post("/add",async(req,res)=>{
  
    let {rating,Comment,product_id}=req.body
    try{
        let data=new comment({rating,Comment,product_id})
        data.save()
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})


commentRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params
    try{
        let data=await comment.findByIdAndDelete({_id:id})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})


commentRouter.patch("/update/:id",async(req,res)=>{
    let {id}=req.params
    try{
        let data=await comment.findByIdAndUpdate({_id:id},req.body)
        res.send(data)

    }
    catch(err){
        res.send(err)
    }
})


module.exports=commentRouter