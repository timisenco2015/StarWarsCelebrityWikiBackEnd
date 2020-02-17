const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
require('dotenv').config('./app');
const personRepo = require('../../repo/personRepo');


const flatCache = require('flat-cache')
let cache = flatCache.load(process.env.MEMOCACHEFILELOCATION);
let flatCacheMiddleware = (req,res, next) => {
    let key =  '__express__' + req.originalUrl || req.url
    let cacheContent = cache.getKey(key);
    if( cacheContent){
        res.send( cacheContent );
    }else{
        res.sendResponse = res.send
        res.send = (body) => {
            cache.setKey(key,body);
            cache.save();
            res.sendResponse(body)
        }
        next()
    }
};


//get star wars celebrity by id
router.get("/person/getDetails/:id",flatCacheMiddleware, async (req, res) => {
    try 
    {
       
       const success = await personRepo.people(req, res);
      
        res.status(success.status).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;