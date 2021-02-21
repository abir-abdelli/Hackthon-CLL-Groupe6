var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

 
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
     
            dbo.createCollection("materials");
         
          client.close();

     
    })
})

module.exports = router
