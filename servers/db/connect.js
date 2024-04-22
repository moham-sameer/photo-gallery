const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ms4492222:Q8x08OdH5nJ607xM@cluster0.hmex6wh.mongodb.net/MyDataBase?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connected to MongoDB")
})