var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

function unixToNatural(unix){
  var date=new Date(unix*1000);
  var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var month=months[date.getMonth()];
  var year=date.getFullYear();
  var day=date.getDay();
  var result = month + ' ' + day + ', ' + year;
  return result;
}

router.get('/:time',function(req,res){
  if(!isNaN(req.params.time)){
    var result = unixToNatural(req.params.time);

    res.json( {"unix": req.params.time, "natural": result } );
  }
  else{
    var natural = new Date(req.params.time);
    if(!isNaN(natural)){
      var unix = natural/1000;
      res.json( {"unix": unix, "natural": req.params.time } );
    }
    else{
      res.json({"unix": null, "natural": null})
    }

  }
});



module.exports = router;
