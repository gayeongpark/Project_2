const router = require('express').Router();


router.get('/map', (req, res) => {
  res.render('map');
});

module.exports = router;