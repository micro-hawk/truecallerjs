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


var crypto = require('crypto');
var randomBytes = require('randombytes');
var Charset = require('./charset.js');

function safeRandomBytes(length) {
  while (true) {
    try {
      return randomBytes(length);
    } catch(e) {
      continue;
    }
  }
}

function processString(buf, initialString, chars, reqLen, maxByte) {
  var string = initialString;
  for (var i = 0; i < buf.length && string.length < reqLen; i++) {
    var randomByte = buf.readUInt8(i);
    if (randomByte < maxByte) {
      string += chars.charAt(randomByte % chars.length);
    }
  }
  return string;
}

function getAsyncString(string, chars, length, maxByte, cb) {
  crypto.randomBytes(length, function(err, buf) {
    if (err) {
      // Since it is waiting for entropy, errors are legit and we shouldn't just keep retrying
      cb(err);
    }
    var generatedString = processString(buf, string, chars, length, maxByte);
    if (generatedString.length < length) {
      getAsyncString(generatedString, chars, length, maxByte, cb);
    } else {
      cb(null, generatedString);
    }
  })
}

const generateRandomString  = function(options, cb) {
  var charset = new Charset();

  var length, chars, capitalization, string = '';

  // Handle options
  if (typeof options === 'object') {
    length = options.length || 32;

    if (options.charset) {
      charset.setType(options.charset);
    }
    else {
      charset.setType('alphanumeric');
    }

    if (options.capitalization) {
      charset.setcapitalization(options.capitalization);
    }

    if (options.readable) {
      charset.removeUnreadable();
    }

    charset.removeDuplicates();
  }
  else if (typeof options === 'number') {
    length = options;
    charset.setType('alphanumeric');
  }
  else {
    length = 32;
    charset.setType('alphanumeric');
  }

  // Generate the string
  var charsLen = charset.chars.length;
  var maxByte = 256 - (256 % charsLen);

  if (!cb) {
    while (string.length < length) {
      var buf = safeRandomBytes(Math.ceil(length * 256 / maxByte));
      string = processString(buf, string, charset.chars, length, maxByte);
    }

    return string;
  }

  getAsyncString(string, charset.chars, length, maxByte, cb);

};

module.exports = generateRandomString
