const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const parser = require("body-parser");
var cors = require('cors');
require('./auth');

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

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure', (req, res) => {
    res.send("Something went wrong!.")
})
app.get('/auth/protected', isLoggedIn, (req, res) => {
    let name = req.user.displayName;
    res.send(`Hello ${name}, you are logged in.`)
})

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
    
  })

app.use('/', require('./routes'));

/*app.listen(port, () => {
    console.log('Web Server is listening at port ' + port);
});*/

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
  });