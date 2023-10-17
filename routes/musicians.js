const express = require("express");
const router = express.Router();

const { Musician } = require("../models/index")


router.get("/", async(req,res)=>{
    let musicians =  await Musician.findAll();
    res.json(musicians)
  })
  
router.get("/:id", async(req,res)=>{
    let musicians =  await Musician.findAll();
    res.json(musicians[req.params.id-1])
})

router.post("/", async(req,res)=>{
    let musicians =  await Musician.findAll();
    const addMu = await Musician.create(req.body);
    musicians.push(addMu)
    res.json(musicians)
})

router.put("/:id", async(req,res)=>{
    let musicians =  await Musician.findAll();
    musicians.splice([req.params.id-1],1,req.body)
    res.json(200)
})

router.delete("/:id", async(req,res)=>{
    let musicians =  await Musician.findAll();
    musicians.splice([req.params.id-1],1)
    res.json(200)
})
  
  module.exports = {router}