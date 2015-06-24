var shell = require('shelljs');
var fs    = require('fs');
var path  = require('path');

module.exports = function(options) {
	var options = {
		file: options.file || null,
		minify: options.minify || false,
		dest: options.dest,
	};

	// Make sure we have the gopherjs binary on our path
	if (!shell.which('gopherjs')) {
		throw new Error('gopherjs is missing');
	}

	// Create our temporary gopherjs folder
	if (!fs.existsSync(options.dest)) {
		fs.mkdirSync(options.dest);
	}

	// Compile
	var tmpfile = filename(options.file, options.dest);
	options.path = path.parse(options.file.path).dir;
	shell.exec(buildexecstr(options, tmpfile), {silent: true});

	// Read source and mapping into object
	var gopher = {};
	gopher.file = fs.readFileSync(tmpfile, 'utf8');
	gopher.map  = fs.readFileSync(tmpfile + '.map', 'utf8');

	return gopher;
}

function filename(file, dir) {
	return dir + '/' + file.relative.replace('.go', '.js')
}

function buildexecstr(options, tmpfile) {
	var str =  'gopherjs build';
	    str += options.minify ? ' -m' : '';
	    str += ' ' + options.path + '/*.go';
	    str += ' -o ' + tmpfile;

	return str;
}
