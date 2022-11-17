#!/usr/bin/env node
import { roll } from '../lib/roll.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';



const argv = yargs(hideBin(process.argv)).argv;

var sides = 6;
var dice = 2;
var rolls = 1;






if (argv.sides != null) {
    sides = argv.sides;
}


if (argv.dice != null) {
    dice = argv.dice;
}


if (argv.rolls != null) {
    rolls = argv.rolls;
}


const output = roll(sides, dice, rolls)


console.log(JSON.stringify({"sides": sides, "dice":dice,"rolls":rolls,"results":output}))