const express = require('express');
const app = express();
const parser = require("body-parser");
var cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(parser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Already Active!");
});

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