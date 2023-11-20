# sameer-Ecom-Api

# https://sameer-server.onrender.com/
product

for get /product
for update /product/update/id
for delete /product/updata/id
for  add  /product/add


 for adding please add same keys


 

 category:{type:String},
    title:{type:String},
    price:{type:String},
    description:{type:String},
    thumbnail:{type:String},
    images:{type:[String]},
    details:[{Fabric:String,Color:String,Fit:String,Length:String,Stretch:String}],



    for comment same thing just change product and place comment and schema routes


    for adding comment follow this structure



     rating:{type:String},
    Comment:{type:String},
    product_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    
    }
