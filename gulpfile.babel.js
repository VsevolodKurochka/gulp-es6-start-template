'use strict';

// General

import gulp 						from 'gulp';
import install 					from 'gulp-install';
import notify 					from 'gulp-notify';
import browserSync from 'browser-sync';

// JS

import browserify 			from 'browserify';
import source 					from 'vinyl-source-stream';
import babelify 				from "babelify";

// Init browserSync
const server = browserSync.create();

// Install packages From package.json. Usage: npm install
gulp.src(['./package.json'])
	.pipe(install())

// Server
function reload(done) {
  server.reload();
  done();
}
function serve(done) {
  server.init({
    server: {
      baseDir: './app',
      notify: true
    }
  });
  done();
}

// JS

gulp.task('scripts', () =>
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

gulp.task('scripts:watch', () => {
	gulp.watch("app/babel/**/*.js", gulp.series('scripts', reload));
});

gulp.task('html:watch', () => {
	gulp.watch("app/**/*.html").on('change', browserSync.reload);
});




// Your "watch" task
gulp.task(
	'watch', 
	gulp.parallel(
		serve,
		'scripts:watch',
		'html:watch'
	)
);

gulp.task('default', gulp.series('watch'));