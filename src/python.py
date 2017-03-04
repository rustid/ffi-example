from ctypes import cdll
from sys import platform

if platform == 'darwin':
    prefix = 'lib'
    ext = 'dylib'
elif platform == 'win32':
    prefix = ''
    ext = 'dll'
else:
    prefix = 'lib'
    ext = 'so'

lib = cdll.LoadLibrary('target/debug/{}ffi_rustid.{}'.format(prefix, ext))
hitung = lib.hitung

input = 4
output = hitung(input)
print('{} * 2 = {}'.format(input, output))

