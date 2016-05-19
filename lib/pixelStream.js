var util = require('util');
var stream = require('stream');
var colors = require('colornames');

/**
 * Stream that filters tweets for specified hashtag and converts valid tweets into
 * an object containing a pixel number and something that looks like a color.
 */
function pixelStream(opts) {

	var opts = opts || { };

	if(!opts.filter) { throw new Error("No filter specified"); }

	stream.Transform.call(this);
	this._writableState.objectMode = true;
	this._readableState.objectMode = true;
	this._filter = opts.filter;
}

util.inherits(pixelStream, stream.Transform);

pixelStream.prototype._transform = function _transform(chunk, enc, done) {

	var color;
	var words = chunk.text.toLowerCase().replace(this._filter, '').split(' ');
	words.forEach(function findMeaning(val) {

    validColors = ['red', 'green', 'blue'];
    if(validColors.indexOf(val) !== -1) {
      return color = val;
    }

	});
	this.push(color);
	done();
}

module.exports = pixelStream;
