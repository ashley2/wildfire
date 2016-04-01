'use strict'
const prefixer = require('gulp-autoprefixer')
const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');

gulp.task('default', ['watch', 'sass']);

gulp.task('sass', (done)=>{
  gulp.src('./sass/*.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(clean())
  .pipe(gulp.dest('./public'))
  .on('end', done) 
})

gulp.task('watch', () =>{
  gulp.watch('./sass/*.scss', ['sass'])
})
