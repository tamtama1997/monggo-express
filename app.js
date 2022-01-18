const express = require ('express');
// const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const db = require('./app/models')

db.mongoose
.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    
}).then(()=>{
    console.log('database connected!');
}).catch((err)=>{
    console.log('cannot connect to the database'+ err);
    process.exit();
});

const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.json(
    {
      status: 'success',
      data: null,
      message: 'this server is running',
      code: 200
    },
  );
});


// app.get('/',(req,res)=>{
//     res.json({
//         message:'welcome to mongo express api'
//     })
// })

require('./app/routes/post.routes')(app)

// const PORT = process.env.PORT || 8000

// app.listen(PORT, ()=>{
//     console.log('Server is running on http://localhost:8000');
// })
app.listen(port, () => {
    console.log('server', `server up at ${port}`, 'listen server');
  })
