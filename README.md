# gulp-gopherjs

A [GopherJS](http://www.gopherjs.org/) plugin for [Gulp](http://gulpjs.com/).

[![NPM Version](https://img.shields.io/npm/v/gulp-gopherjs.svg)](https://www.npmjs.com/package/gulp-gopherjs)

## Installation

```bash
npm install --save gulp-gopherjs
```

## Usage

```javascript
var gopher = require('gulp-gopherjs');

gulp.task('gopher', function() {
	return gulp.src('main.go')
		.pipe(gopher({/* options */}));
});
```

See [test/gulpfile.js](test/gulpfile.js) for more examples.

**NOTE**: in `gulp.src` you need to set your main go file to be compiled. All go files in that directory will be compiled.

## Options

```javascript
{
	// Set a destination folder for the compiled files.
	dest: './js',

	// Set to true if you want to minify your compiled files.
	minify: false,
}
```
