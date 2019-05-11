var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

// 1. npm init
// 2. npm install
// 3. npm install gulp --> w folderze z projektem
// 4. w projekcie stworzyć plik gulpfile.js i zrobić to co powyżej 
// 5. npm install gulp-sass
// 6. gulp sass --> uruchomienie
// 7. gulp watch
//  w OUTPUT STYLE można zmienić styl w jakim sass wyeksportuje do css.