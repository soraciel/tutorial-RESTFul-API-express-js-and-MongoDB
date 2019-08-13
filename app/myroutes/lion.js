const routes = require('express').Router();
var Lion     = require('../models/lion');

console.log('lion router');
routes.get('/', (req, res) => {
	console.log('get called');
  Lion.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
})
 
 routes.post('/', (req, res) => {
	console.log('post called');
  var lion = new Lion();      // create a new instance of the Bear model
        lion.name = req.body.name;  // set the lions name (comes from the request)
		

		// save the lion and check for errors
        lion.save(function(err) {
            if (err){
                res.send(err);
				console.log(err);
				}
            res.json({ message: 'lion created!' });
        });
});
 routes.put('/', (req, res) => {
	console.log('put called');
  /*Lion.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });*/
});

module.exports = routes;
