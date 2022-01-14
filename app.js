const express = require ('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{
    res.json({
        message:'welcome to express tutorial'
    })
})

const PORT = 8000

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:8000');
})