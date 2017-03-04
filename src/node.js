var ffi = require('ffi');

var lib = ffi.Library('target/debug/libffi_rustid', {
  'hitung': [ 'int', [ 'int' ] ]
});

var input = 4;
var output = lib.hitung(input);
console.log(input + " * 2 = " + output);
