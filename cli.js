#!/usr/bin/env node
'use strict';
const meow = require('meow');
const macromake = require('.');

const cli = meow(`
	Usage
	  $ macromake [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ macromake
	  unicorns & rainbows
	  $ macromake ponies
	  ponies & rainbows
`);

console.log(macromake(cli.input[0] || 'unicorns'));
