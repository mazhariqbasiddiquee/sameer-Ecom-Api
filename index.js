const express=require("express")
const app=express()
const mongoose=require("mongoose")
require('dotenv').config()
const productRouter=require("./routes/product.routes")
const commentRouter=require("./routes/comment.routes")
app.use(express.json())

app.use("/product",productRouter)
app.use("/comment",commentRouter)






app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.URL)
    console.log("server is running")
})