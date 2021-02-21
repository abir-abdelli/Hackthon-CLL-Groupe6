var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/bookmaterials.html'));

});

router.post('/', function(req, res, next) {

  const myquery = {
    nomclient : req.body.nomclient,  
    date : req.body.date,
    raison: req.body.raison,
    periode: req.body.periode
   
 };

 
    MongoClient.connect(url, function (err, client) {
      var dbo = client.db("CLL");
     

            dbo.collection("materials").insertOne(myquery)
         
          client.close();

     
    })
})