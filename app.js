const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { graphqlHTTP } = require('express-graphql');
const GitHubStrategy = require('passport-github2').Strategy;
const app = express();
const parser = require("body-parser");
var cors = require('cors');

const mongodb = require('./db/connection');



//requirements for graphql

const schema = require('./graphql/schema');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(parser.json());

const port = process.env.PORT || 3000;

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
    res.send("Already Active!");
});

//route for graphql///////////////////
app.use('/graphql', graphqlHTTP({
  schema: schema,
  //schema: schema,
  graphiql: true,
}));

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(accesToken, refreshToken, profile, done) {
  //  User.findOrCreate({ githunid: profile.id }, function (err, user) {
      return done(null, profile);
  // })
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});


app.get('/', (req, res) => {res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged Out")});

app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs', session: false}),
    (req, res) => {
        req.session.user = req.user;
        res.redirect('/');
    });

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
    
  })



app.use('/', require('./routes'));

/*app.listen(port, () => {
    console.log('Web Server is listening at port ' + port);
});*/

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } 
});

/*
app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
})*/


/*
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected and server running on ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });*/

  module.exports = app;