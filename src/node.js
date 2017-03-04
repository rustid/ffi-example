var ffi = require('ffi');

var lib = ffi.Library('target/debug/libffi_rustid', {
  'double_input': [ 'int', [ 'int' ] ]
});

var input = 4;
var output = lib.double_input(input);
console.log(input + " * 2 = " + output);
