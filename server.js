
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const api = require('./server/routes/api')

// mongoose.connect('mongodb://localhost/crm-mongo', { useNewUrlParser: true })
PORT = process.env.PORT || 5000,
URI = process.env.MONGODB_URI || 'mongodb://localhost/crm-mongo',




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('node_modules'));
app.use(express.static('build'));
app.use('api/', api);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, connectTimeoutMS: 5000, serverSelectionTimeoutMS: 5000 })
.then(function(){
    app.listen(PORT, function(){
        console.log(`Server is up and running on port: ${PORT}`);
    });
})
.catch(function(err){
    console.log(err.message);
});
