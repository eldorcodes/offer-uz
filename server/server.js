const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 4444;

// route handle
app.get('/data',(req,res) => {
    res.json({ text:'hello from server' })
})

app.post('/clientData',(req,res) => {
    console.log(req.body)
})

app.listen(port,(err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server started on port ${port}`);
});
