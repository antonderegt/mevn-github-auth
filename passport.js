const GitHubStrategy = require('passport-github').Strategy,
      User = require('./server/models/user')

module.exports = function (passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    done(null, user)
  })

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.APP_URL+'auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {

    User.findOne({ 'id': profile.id }, function (err, user) {
      if (err) {
        return done(err)
      }

      if (user) {
        return done(null, user)
      } else {
        var newUser = new User()

        newUser.id = profile.id
        newUser.username = profile.username
        newUser.displayName = profile.displayName

        newUser.save(function (err) {
          if (err) {
            throw err
          }

          return done(null, profile)
        })
      }
    })
  }))
}
