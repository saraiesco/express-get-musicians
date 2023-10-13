const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const {Band} = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians',async (request,response)=>{
    let musicians = await Musician.findAll();
    response.json(musicians)
})

app.get('/musicians/1',async (request,response)=>{
    let musicians = await Musician.findAll();
    response.json(musicians[0])
})

app.get('/musicians/2',async (request,response)=>{
    let musicians = await Musician.findAll();
    response.json(musicians[1])
})

app.get('/musicians/3',async (request,response)=>{
    let musicians = await Musician.findAll();
    response.json(musicians[2])
})

app.get('/bands',async (request,response)=>{
    let bands = await Band.findAll();
    response.json(bands)
})

module.exports = app;