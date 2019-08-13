var express = require('express');
var router = express.Router();
	
	//route name 
router.route('/bears/name/:name')
	.get(function(req, res) {
	 	
	 
        Bear.find(
		{
			name: { $regex: new RegExp('^'+ req.params.name + '$', "i")} //insensitive case query
		},function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
			
        });
    });
	
	//last line - try this
module.exports = router;