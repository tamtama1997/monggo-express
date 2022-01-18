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
console.log('ini masuk');
app.get('/',(req,res)=>{
    res.send(
        'welcome to mongo express api'
    )
})

require('./app/routes/post.routes')(app)

// const PORT = process.env.PORT || 8000

// app.listen(PORT, ()=>{
//     console.log('Server is running on http://localhost:8000');
// })

app.listen(process.env.PORT || 8000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });