const express=require("express")
const {product}=require("../models/models.product")
const productRouter=express.Router()



productRouter.get("/", async (req, res) => {
    try {
        const data = await product.aggregate([{
            $lookup:{
                from:"feedbacks",
                localField:"_id",
                foreignField:"product_id",
                as:"review_ratings"
            }
        }])

        // console.log(data);

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});


productRouter.post("/add",async(req,res)=>{
    try{
        let data=new product(req.body)
        data.save()
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})


productRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params
    try{
        let data=await product.findByIdAndDelete({_id:id})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})


productRouter.patch("/update/:id",async(req,res)=>{
    let {id}=req.params
    try{
        let data=await product.findByIdAndUpdate({_id:id},req.body)
        res.send(data)

    }
    catch(err){
        res.send(err)
    }
})


module.exports=productRouter