
// Llamar dependencias.
const {src , dest, watch, parallel } = require('gulp');

// CSS

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber'); // Error más simplificado

// Dependencias de imaganes -- iconos.

const webp = require('gulp-webp'); // Convertidor de imaganes, jpg a webp. avif



function css(done) {

    src('src/scss/**/*.scss') //identificar el archivo scss.

        .pipe(plumber()) // Plumber -- Simplifica el error
        .pipe(sass())//Compilcar el archivo
        .pipe(dest('build/css')); // Almacenar. 
    done();
}


// Funcion JavScript

function javascript (done) {


    src('src/js/**/*.js')
    .pipe(dest('build/js'));

    done();
}

/// Fincion de compilar archivos automaticamente

function dev(done) {

    watch('src/scss/**/*.scss' , css);
    watch('src/js/**/*.js' , javascript);
    
    done();
}

function VersionWebp (done) {

    // Se pone la dirección de las imgs

    const opciones = {

        quality :50
    };

    src('src/img/**/*.{jpg , svg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))


    done();

}

// Defeniir la complicacion de las funciones. 

exports.css = css;
exports.js = javascript;
exports.VersionWebp = VersionWebp;
exports.dev = parallel(VersionWebp, javascript, dev);
