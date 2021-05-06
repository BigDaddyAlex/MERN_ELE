const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const tasks = require('./routes/api/tasks')

const app = express();

app.use(bodyParser.json());
app.use('/api/tasks',tasks);

const db = require('./config/keys.js').mongoURI;

mongoose.connect(db)
.then(()=>console.log("connected."))
.catch(err=>console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('Server started on port 5000.'));
