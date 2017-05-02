const gulp = require('gulp'),
			pug = require('gulp-pug'),
			sass = require('gulp-sass'),
			livereload = require('gulp-livereload');

gulp.task('pugify', () => {
	return gulp.src('./backbone/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'))
		.pipe(livereload());
});

gulp.task('sassify', () => {
	return gulp.src('./backbone/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'))
		.pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen();
	gulp.watch('./backbone/*', ['pugify', 'sassify']);
});

gulp.task('default', ['watch', 'pugify' ,'sassify']);
