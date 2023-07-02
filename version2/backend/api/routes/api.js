const express = require('express');
const router = express.Router();
const baseModel = require('../models/baseModel');


router.get('/properties', async(req, res)=>{
try{
    console.log("executing this");
    const properties = await baseModel.find();
    res.json(properties);
} catch (error) {
    res.status(500).json({error:'Server error'});
}
})

router.post('/properties', async(req, res)=>{
try{
    const newProperty = req.body;
    const createdProperty = await baseModel.create(newProperty);
    res.status(201).json(createdProperty)
} catch(error) {
res.status(500).json({error: "Failed to post, server error"})
}
});

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

router.get('/properties/:searchquery', async(req, res) => {
const searchQuery = req.params.searchquery;
try{
    const searchResults= await baseModel.find({propertyName: {$regex: searchQuery, $options: 'i'}});
    res.json(searchResults);
} catch (error){
    console.error('Error searching properties', error);
    res.status(500).json({error:'An error occured while searching properties'})
}

});

router.get('/properties/:searchquery', async (req, res) => {
    const searchQuery = req.params.searchquery;
    try {
      const searchResults = await baseModel.find({
        $or: [
          { propertyName: { $regex: searchQuery, $options: 'i' } },
          { location: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
          { amenities: { $regex: searchQuery, $options: 'i' } },
        ],
      });
      res.json(searchResults);
    } catch (error) {
      console.error('Error searching properties', error);
      res.status(500).json({ error: 'An error occurred while searching properties' });
    }
  });
  





module.exports = router;


