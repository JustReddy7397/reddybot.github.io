const passport = require('passport');
const discordStrategy = require('passport-discord');
require('dotenv').config();

passport.use(
    new discordStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        scope: ['identify', 'guilds'],
    }, async (accesToken, refreshToken, profile, done) => {
        console.log("yeet")
    })
);