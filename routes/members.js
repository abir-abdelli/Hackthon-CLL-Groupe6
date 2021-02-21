var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi members' });
});

router.post('/', function(req, res, next) {
  const action =  req.body.action;

  const myquery = { 
    name : req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    status: req.body.status
 };

 
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
      
          if (action == "update") 
              dbo.collection("members").updateOne(req.body.id, myquery);
          else if  (action == "delete") {
            dbo.collection("members").deleteOne(req.body.id)
          }
          else if (action == "add") {
            dbo.collection("members").insertOne(req.body.id)
          }
          client.close();

      
    })
});


  

module.exports = router;
