'use strict';

// src/main.js
// import foo from './foo';
function main () {
    Promise.resolve().then(function () { return require('./foo-CxwvyDcu.js'); }).then(({ default: foo }) => {
        console.log(foo);
    });
}

module.exports = main;
