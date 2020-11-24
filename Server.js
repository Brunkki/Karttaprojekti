const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./queries')

app.listen(3000, () => console.log("kuuntelen"));
app.use(express.static("public"));
app.use(express.json({limit: '1mb'}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const paikat = [
  {
    "paikka": "Helsinki",
    "arvostelu": "Dät vas rili nais",
    "longitude": "24.887296",
    "latitude": "60.2341376000004"
  },
  {
    "paikka": "Levi",
    "arvostelu": "Vasnt ool dät nais",
    "longitude": "24.8082",
    "latitude": "67.8040"
  }
]

app.get('/api/paikat', db.haePaikat);
