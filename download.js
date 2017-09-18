'use strict';

var get         = require('got');
var resolve     = require('path').resolve;
var writeStream = require('fs').createWriteStream;

var src = 'https://cdn.conekta.io/js/latest/conekta.js';
var dest = resolve(__dirname, 'conekta.js');

get.stream(src).pipe(writeStream(dest));
