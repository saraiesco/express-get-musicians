const express = require("express");
const router = express.Router();

const { Musician } = require("../models/index");
const app = require("../src/app");
const {check, validationResult} = require("express-validator")
router.use(express.json())

router.get("/", async(req,res)=>{
    let musicians =  await Musician.findAll();
    res.json(musicians)
  })
  
router.get("/:id", async(req,res)=>{
    let musicians =  await Musician.findAll();
    res.json(musicians[req.params.id-1])
})

router.post("/", [
    check("name").not().isEmpty().trim(), 
    check("instrument").not().isEmpty().trim(),

], async(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.json({error:errors.array()})
    }else{
    let musicians =  await Musician.findAll();
    const addMu = await Musician.create(req.body);
    musicians.push(addMu)
    res.json(musicians)
    }
    
})

router.put("/:id", async(req,res)=>{
    let musicians =  await Musician.findAll();
    const updated = await Musician.update(req.body, {where:{id:req.params.id}});   
    res.json(musicians)
})

router.delete("/:id", async(req,res)=>{
    const deleteMu = await Musician.destroy({where: {id : req.params.id}});
    res.json(200)
})
  
  module.exports = {router}