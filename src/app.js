const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const {Band} = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

//part 1
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

//part2
app.get("/musicians/:id", async(request, response)=>{
    let id = request.params.id
    let musician = await Musician.findByPk(id)
    response.json(musician)
})

// part3
app.use(express.json());
app.use(express.urlencoded()); // needed for POST or PUT; to recognize the incoming
app.post("/musicians", async (request, response) => {
    try{
        const addMu = await Musician.create(request.body);
        if (!addMu) {
            throw new Error("Didn't create musician")
        }
        response.json(addMu)
    } catch (err){
        next(err);
    }
})

module.exports = app;