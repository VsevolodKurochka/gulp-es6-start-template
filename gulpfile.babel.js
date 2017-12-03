'use strict';

// General

import gulp 						from 'gulp';
import install 					from 'gulp-install';
import notify 					from 'gulp-notify';

// JS

import browserify 			from 'browserify';
import source 					from 'vinyl-source-stream';
import babelify 				from "babelify";

// Init browserSync
const browserSync = require('browser-sync').create();

// Install packages From package.json
// Usage: npm install
gulp.src(['./package.json'])
	.pipe(install())


// JS

gulp.task('es6', () =>
	browserify({
		entries: './app/babel/app.js',
		debug: true
	})
	.transform(babelify)
	.on('error', notify.onError({
			title: 'babelify Error',
			message: '<%= error.message %>'
	}))
	.bundle()
	.on('error', notify.onError({
			title: 'Bundle Error',
			message: '<%= error.message %>'
	}))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('app/js'))
);

gulp.task('es6:watch', gulp.parallel(browserSync.reload, () => {
	gulp.watch("app/babel/**/*.js", gulp.series('es6'));
}));

gulp.task('html:watch', () => {
	gulp.watch("app/**/*.html").on('all', browserSync.reload);
});

gulp.task('server:watch', () => {
	browserSync.init({
		server: "./app",
		notify: true
	});
});

// Your "watch" task
gulp.task(
	'watch', 
	gulp.parallel(
		'server:watch',
		'es6:watch',
		'html:watch'
	)
);

gulp.task('default', gulp.series('watch'));