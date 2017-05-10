const express = require('express'),
      router = express.Router(),
      passport = require('passport')

router.get('/github',
  passport.authenticate('github'))

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/counter')
  })

module.exports = router
