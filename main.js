#!/usr/bin/env node
const diamond = require('./lib/diamond.js')

const [ character ] = process.argv.slice(2)
console.log(diamond(character))
