var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String,
	weight: Number
	
});

module.exports = mongoose.model('Bear', BearSchema);
