var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LionSchema   =  new Schema({
    name: String,
	weight: Number
	
});

module.exports = mongoose.model('Lion', LionSchema);
