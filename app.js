// const names=require("./names")
// const mul=require("./multi")
// require("./multi")
// // const sub=require("./sub")
const http =require("http")


const server =http.createServer((req,res)=>{
    
    if(req.url ==='/'){
        res.end("Welcoem to our Services")
    }
    if(req.url ==='/contact'){
        res.sendFile(__dirname,"/contact.html")
        res.end();
    }
    
    res.sendFile(__dirname,"/contact")
    res.end()
})
 

server.listen(3000)
console.log("sever Running on port 3000");
console.log('Server Connected Succesfully');