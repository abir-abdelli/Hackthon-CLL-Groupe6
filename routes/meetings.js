var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meetings', { title: 'meetings' });
});

router.post('/', 
function(req, res, next) {
  const action =  req.body.action;

  const myquery = { 
    date : req.body.date,
    presence : req.body.presence,
    sujet : req.body.sujet,
 };
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
      
          if (action == "update") 
              dbo.collection("meetings").updateOne(req.body.id, myquery);
          else if  (action == "delete") {
            dbo.collection("meetings").deleteOne(req.body.id)
          }
          else if (action == "add") {
            dbo.collection("meetings").insertOne(req.body.id)
          }
          client.close();

      
    })
})

module.exports = router;
