let obj={}
const ratelimiter=(req,res,next)=>{
    let ip=req.ip
    console.log(obj)
    if(obj[ip]==undefined){
        obj[ip]={count:1,time:Date.now()}
        next()
    }
    else if(obj[ip]!==undefined&&obj[ip].count<3&&Date.now()-obj[ip].time<10000){
        obj[ip].count++
        next()
    }
    else if(obj[ip]!==undefined&&obj[ip].count>=3&&Date.now()-obj[ip].time<10000){
        res.status(429).json({msg:"Your limit is exceed"})
    }
    else if(obj[ip]!==undefined&&Date.now()-obj[ip].time>10000){
        obj[ip]={count:1,time:Date.now()}

        next()
    }
    
    

}

module.exports={ratelimiter}