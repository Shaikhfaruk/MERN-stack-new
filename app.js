const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`welcome world`)
});

app.listen(3000, (err, res) => {
    console.log('server listening on port 3000')
})