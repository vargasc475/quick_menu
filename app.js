const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Already Active!");
});

app.listen(port, () => {
    console.log('Web Server is listening at port ' + port);
});