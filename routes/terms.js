const router = require('express').Router();

router.get('/terms', (req, res) => {
    res.render('terms');
  });



module.exports = router;