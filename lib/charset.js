// MIT License

// Copyright (c) 2021 Emmadi Sumith Kumar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


var arrayUniq = require('array-uniq');

function Charset() {
  this.chars = '';
}

Charset.prototype.setType = function(type) {
  var chars;

  var numbers     = '0123456789';
  var charsLower  = 'abcdefghijklmnopqrstuvwxyz';
  var charsUpper  = charsLower.toUpperCase();
  var hexChars    = 'abcdef';
  var binaryChars = '01';
  var octalChars  = '01234567';

  if (type === 'alphanumeric') {
    chars = numbers + charsLower + charsUpper;
  }
  else if (type === 'numeric') {
    chars = numbers;
  }
  else if (type === 'alphabetic') {
    chars = charsLower + charsUpper;
  }
  else if (type === 'hex') {
    chars = numbers + hexChars;
  }
  else if (type === 'binary') {
    chars = binaryChars;
  }
  else if (type === 'octal') {
    chars = octalChars;
  }
  else {
    chars = type;
  }

  this.chars = chars;
}

Charset.prototype.removeUnreadable = function() {
  var unreadableChars = /[0OIl]/g;
  this.chars = this.chars.replace(unreadableChars, '');
}

Charset.prototype.setcapitalization = function(capitalization) {
  if (capitalization === 'uppercase') {
    this.chars = this.chars.toUpperCase();
  }
  else if (capitalization === 'lowercase') {
    this.chars = this.chars.toLowerCase();
  }
}

Charset.prototype.removeDuplicates = function() {
  var charMap = this.chars.split('');
  charMap = arrayUniq(charMap);
  this.chars = charMap.join('');
}

module.exports = exports = Charset;
