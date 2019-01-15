const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/',(req, res) => {
  res.send('Manda')
})

app.post("/api/Manda", (req, res) => {
  res.send("Manda");
});

app.get('/people/:id', (req, res) => {
    res.send('people id: ' + req.params.id)
})

app.get('/coba_query', (req, res) => {
    res.send(req.query.Manda + '  ' + req.query.gayung)
})

app.post('/coba_body', (req, res) => {
    res.send(req.body.gayung)
})



app.listen(4000, () => console.log('4000'))