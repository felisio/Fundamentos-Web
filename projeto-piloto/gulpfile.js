'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var runSequence = require('run-sequence');

// load plugins
var $ = require('gulp-load-plugins')();


gulp.task('browser-sync', function() {
	browserSync({
		server: {
            baseDir: "./app"
        },
		notify: true,
		port: 3000
	});
});



/********************
*
* Desenvolvimento
*
********************/


gulp.task('serve', function() {
	runSequence('browser-sync');
    gulp.watch(['app/**/*.html'], reload);
	gulp.watch(['app/**/*.js'], reload);
});