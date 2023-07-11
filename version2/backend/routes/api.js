//This file contains all our routes to the api

const express = require('express');
const router = express.Router();
const baseModel = require('../models/baseModel');
const Fuse = require('fuse.js');

//get all properties
router.get('/properties', async(req, res)=>{
try{
    const properties = await baseModel.find();
    res.json(properties);
} catch (error) {
    res.status(500).json({error:'Server error'});
}
})

//add a new property
router.post('/properties', async(req, res)=>{
try{
    const newProperty = req.body;
    const createdProperty = await baseModel.create(newProperty);
    res.status(201).json(createdProperty)
} catch(error) {
res.status(500).json({error: "Failed to post, server error"})
}
});

//update an existing property
router.put('/properties/:id', async(req, res)=>{
    try{
        const updatedProperty = await baseModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedProperty) {
            return res.status(404).json({error:'Property not found'});
        }
        res.json(updatedProperty);
    } catch(error) { 
        res.status(500).json({error:'Put failed, server error'})
    }
});

//delete an existing property
router.delete('/properties/:id', async(req, res)=>{
    try{
        const deletedProperty = await baseModel.findByIdAndDelete(req.params.id);
        if(!deletedProperty){
            return res.status(404).json({error:'Property not found'});
        }
        res.json(deletedProperty);
    } catch(error) {
        res.status(505).json({error:'Server error'});
    }

});


//Queries the search query with a string 
router.get('/properties/:searchquery', async (req, res) => {
    const searchQuery = req.params.searchquery;
    try {
        const allproperties = await baseModel.find();
        
        const options = {
            keys: ['propertyType', 'description', 'propertyName', 'location', 'amenities', 'price'],
            includeScore: true,
            threshold: 0.4,
            tokenize: false,
            matchAllTokens: true
          };
                    
    
        const fuse = new Fuse(allproperties, options);


        const result = fuse.search(searchQuery).map((result) => result.item);
        
        res.json(result);
    } catch (error) {
      console.error('Error searching properties', error);
      res.status(500).json({ error: 'An error occurred while searching properties' });
    }
});


module.exports = router;



