"use strict";

import gulp from "gulp";


import path from "../config/path.js";
import app from "../config/app.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from 'gulp-fonter';

export default () => {
    return gulp.src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Font",
            message: error.message,
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest));
};

// module.exports = img;