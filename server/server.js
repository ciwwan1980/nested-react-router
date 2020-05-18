const express=require("express")
const fs=require("fs")
const app=express()

app.get("/product",(req,res)=>{
let data=fs.readFileSync(__dirname+ "/data/products.json", "utf-8")
console.log(data)
res.send(data)
} )


app.listen(3001, ()=>console.log("server is running on PORT 3001"))