var through = require('through2');
var gutil   = require('gulp-util');
var go      = require('./lib/gopher');

var PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-gopherjs';

module.exports = function(options) {
	var options = {
		dest: options.dest || './',
		minify: options.minify || false,
	};

	function compile(file, enc, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isStream()) {
			return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
		}

		var data;
		try {
			data = go({
				file:   file,
				minify: options.minify,
				dest:   options.dest,
			});
		} catch(err) {
			return cb(new PluginError(PLUGIN_NAME, err));
		}

		cb(null, null);
	}
 
	return through.obj(compile);
}
