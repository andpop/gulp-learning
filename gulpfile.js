const { src, dest, task, series } = require("gulp");
var rm = require('gulp-rm');

task('clean', () => {
  return src('dist/**/*', { read: false })
    .pipe(rm())
})

task('copy', series('clean', () => {
  return src('src/styles/*.scss').pipe(dest('dist'));
}))
