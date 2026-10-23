const express=required('express');
const app=express();
const port=5000;
app.get('/',(req,res)=>{
res. send("HEllo World using the git push");
});
app.listen(port,()=>{
console.log("Server is running in ${port}");
});
