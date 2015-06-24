var gulp   = require('gulp');
var gopher = require('../');

gulp.task('gopher', function() {
	return gulp.src('gopherjs.go')
		.pipe(gopher({
			dest: './js',
			minify: false,
		}));
});

gulp.task('default', ['gopher']);
