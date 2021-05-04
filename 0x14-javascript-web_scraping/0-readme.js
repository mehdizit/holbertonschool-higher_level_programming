#!/usr/bin/node

const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(erro, data) {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data);
    }
});
