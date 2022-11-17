#!/usr/bin/env node
import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';


const args = minimist(process.argv.slice(2));

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


var port = args.port || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/app/', (req, res) => {
    res.send('200 OK').end();
})

app.get('*', (req, res) => {
    res.send('404 NOT FOUND').end()
})


app.get('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.sides) || 6, parseInt(req.dice) || 2,  parseInt(req.rolls) || 1)).end();
})

app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(req.params.sides || 6, 2, 1)).end();
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(req.params.sides || 6, req.params.dice || 2,  1)).end();
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(req.params.sides || 6, req.params.dice || 2,  req.params.rolls || 1)).end();
})


app.listen(port);