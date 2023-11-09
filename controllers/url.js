const { nanoid } = require("nanoid");

const URL = require('../models/url');


const URL = 
async function handlegenerateNewShortURL(req,res){
  const body = req.body;

  if(!body.url) return res.status(400).json({error: 'url is required'})
  
  
    const shortID = nanoid(8);
   await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory : [],
   });
}