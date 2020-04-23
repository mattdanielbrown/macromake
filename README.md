# macromake [![Build Status](https://travis-ci.com/mattdanielbrown/macromake.svg?branch=master)](https://travis-ci.com/mattdanielbrown/macromake)

> Simple, configurable, customizable Node.js command line tool to very easily create new code starter files interactively


## Install

```
$ npm install macromake
```


## Usage

```js
const macromake = require('macromake');

macromake('unicorns');
//=> 'unicorns & rainbows'
```


## API

### macromake(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global macromake
```

```
$ macromake --help

  Usage
    macromake [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ macromake
    unicorns & rainbows
    $ macromake ponies
    ponies & rainbows
```
