var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('matrials', { title: 'materials' });
});

router.post('/', function(req, res, next) {
  const action =  req.body.action;

  const myquery = { 
    name : req.body.name,
    etat : req.body.etat,
    quantite : bd.body.quantite,
 };

 
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
      
          if (action == "update") 
              dbo.collection("matrials").updateOne(req.body.id, myquery);
          else if  (action == "delete") {
            dbo.collection("matrials").deleteOne(req.body.id)
          }
          else if (action == "add") {
            dbo.collection("matrials").insertOne(req.body.id)
          }
          client.close();

      
    })
})

module.exports = router;
