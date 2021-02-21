var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('keys', { title: 'keys' });
});

router.post('/', function(req, res, next) {
  const myquery = { 
    action :  req.body.action,
    name : req.body.name,
    lastName: req.body.lastName,
    number: req.body.number,
 };

 
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
      
          if (myquery.action == "update") 
              dbo.collection("keys").updateOne(req.body.id, myquery);
          else if  (myquery.action == "delete") {
            dbo.collection("keys").deleteOne(req.body.id)
          }
          else if (myquery.action == "add") {
            dbo.collection("keys").insertOne(myquery)
          }
          else {
              res.send("action not known");
          }
          client.close();

      
    })
})

module.exports = router;