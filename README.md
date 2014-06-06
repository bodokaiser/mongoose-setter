# mongoose-setter

**mongoose-setter** extends the built-in mongoose setters.

## Usage

    var mongoose = require('mongoose');

    // load plugin
    require('mongoose-setter')(mongoose);

    var schema = new mongoose.Schema({
      name: String,
      email: String,
      price: Number
    });

    schema.path('name')
      .trim()
      .capitalize()

    schema.path('email')
      .spaceless()

    schema.path('price')
      .round(2)

## Install

With our lovely [npm](https://github.com/npm/npm)

    $ npm install --save mongoose-setter

## Documentation

**mongoose-setter** extends `mongoose.Schema.Types.*` with more
validation methods on the prototype.

### Number

Extends `mongoose.Schema.Types.Number` with:

#### number.round()

    // transforms 2.991 to 2.99
    schema.path('price').round(2);

Rounds a number before setting.

### String

Extends `mongoose.Schema.Types.String` with:

#### string.trim()

    // transforms '  Bob   Hollywood' to 'Bob Hollywood'
    schema.path('name').trim();

Overwrites the built-in `trim` with a `trim` which removes all doubled
spaces (also in between the words).

#### string.spaceless()

    // transforms '  i  @ bob   .org  ' to 'i@bob.org'
    schema.path('email').spaceless();

Removes all spaces.

#### string.capitalize()

    // transforms 'bOb MARTIN' to 'Bob Martin'
    schema.path('name').capitalize();

Upper cases first character and lowercases rest of space delimited
words.

**Note:** *It is clever to trim the value before capitalizing just to be
safe.*

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
