// 1 require express
const express = require("express");
// 2 express router
const router = express.Router();
// require model user
const User = require("../models/User")

//@desc: testing route
//@path: http://localhost:4500/api/user/test
//@method: GET
//@data: no data
router.get('/test', (req, res) =>{
    res.send("Hello world")
})

//@desc: add contact
//@path: http://localhost:4500/api/user/
//@method: POST
//@data: req.body
router.get('/', async (req, res) =>{
    try {
        const {name, email, phone} = req.body 
        const newUser = new User({name, email, phone})
        await newContact.save() 
        res.status(200).send({msg: "User added successfully...", newUser})
    } catch (error) {
        res.status(400).send({msg: "cannot add contact..."})
    }
    
})

//@desc: get all users
//@path: http://localhost:4500/api/user/
//@method: GET
//@data: no data

router.get('/', async (req, res) =>{
    try {
        const listUsers = await User.find()
        res.status(200).send({msg:"this is the list of user", listUsers})
        
    } catch (error) {
        res.status(400).send({msg:"connot get all users", error})
        
    }
    
})

//@desc: get one user
//@path: http://localhost:4500/api/user/
//@method: GET
//@data: req.params._id
router.get('/:id', async (req, res) =>{
    try {
        const usersToGet = await User.findOne({_id:req.params.id})
        res.status(200).send({msg:"this is the user", usersToGet})
        
    } catch (error) {
        res.status(400).send({msg:"connot get the user", error})
        
    }
    
})

//@desc: edit user
//@path: http://localhost:4500/api/user/
//@method: PUT
//@data: req.params._id & req.body

router.put('/:_id', async (req, res) =>{
    try {
        const{_id}=req.params
        const result = await User.updateOne({_id}, {$set : {...req.body}})
        res.status(200).send({msg:"user updated", result})
        
    } catch (error) {
        res.status(400).send({msg:"connot update this user", error})
        
    }
})


//@desc: delete user
//@path: http://localhost:4500/api/user/
//@method: DELETE
//@data: req.params._id 

router.delete('/:_id', async (req, res) =>{
    try {
        const{_id}=req.params
        await User.findOneAndDelete({_id})
        res.status(200).send({msg:"user deleted"})
        
    } catch (error) {
        res.status(400).send({msg:"connot delete this user", error})
        
    }
})







//export
module.exports = router