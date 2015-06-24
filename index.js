var express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongojs = require('mongojs'),
  db = mongojs('ecommerce', ['products']),
  port = 9999;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api/products', function(req, res){
  db.products.find(req.query, function(err, response){
    if(err){
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  })
})

app.post('/api/products', function(req, res){
  db.products.save(req.body, function(err, response){
    if(err){
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  })
})

app.put('/api/products', function(req, res){
  var id = mongojs.ObjectId(req.body._id);
  delete req.body._id;
  db.products.findAndModify({
    query: {
      _id: id
    },
    update: {
      $set: req.body
    }
  }, function(err, response){
    if(err){
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  })
})

app.listen(port, function(){
  console.log('listening on port: ', port);
})
