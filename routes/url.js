const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');

const Url = require('../models/Url');

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = 'https://chonk.tk';

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if(validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if(url) {
        res.status(200).json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });

        await url.save();

        res.status(200).json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(400).json('Invalid long url');
  }
});


module.exports = router;