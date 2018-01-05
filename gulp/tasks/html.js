var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html', function(){

	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest))
})


// var gulp = require('gulp');
// var config = require('../config').html;
// var rev = require('gulp-rev');

// gulp.task('html', function(){
// 	return gulp.src(config.src)
// 		.pipe(rev())  //set hash key
// 		.pipe(gulp.dest(config.dest))
// 		.pipe(rev.manifest()) //set hash key json
// 		.pipe(gulp.dest(config.rev)); //dest hash key json
// });