const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database').dbConnection();
const PORT = process.env.PORT


app.use(express.json());

app.get('/',(req,res)=>{
res.send("hellow ji")
})

const blog = require('./routes/blog')
app.use('/api/v1',blog);



app.listen(PORT,()=>{
    console.log("app is running at PORT 4000");
    
})