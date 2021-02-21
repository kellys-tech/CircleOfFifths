const express = require('express');
const router = express.Router();
const Scales = require('../models/Scales');

router.get('/me', (req, res) => {
  const { _id, name, email, date } = req.user;

  return res.json({ _id, name, email, date });
});
router.get('/getdata', (req, res) => {
    Scales.find()

      .then(Scales => {
        res.json(Scales);
      })
      .catch(err => {
        res.status(400).json(err);
      });
   
  
    
  });


module.exports = router;
