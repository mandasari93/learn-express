const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let avengersHeroes = {
  next_id: 12,
  data: [
    {
      id: 1,
      name: "Thor",
      realName: "Thor Odinson",
      power: "Lightning"
    },
    {
      id: 2,
      name: "Ironman",
      realName: "Tony Stark",
      power: "Jarvis"
    },
    {
      id: 3,
      name: "Captain Marvel",
      realName: "Mar-Vell",
      power: "She can do everything"
    },
    {
      id: 4,
      name: "Hulk",
      realName: "Robert Bruce Banner",
      power: "Turn into a green Giant"
    },
    {
      id: 5,
      name: "Deadpool",
      realName: "Wade Wilson",
      power: "Regeneration"
    },
    {
      id: 6,
      name: "Doctor Strange",
      realName: "Doctor Stephen Vincent Strange",
      power: "Magic"
    },
    {
      id: 7,
      name: "Captain America",
      realName: "Steven Grant Rogers",
      power: "Super power"
    },
    {
      id: 8,
      name: "Antman",
      realName: "Scott Edward Harris Lang",
      power: "Resize"
    },
    {
      id: 9,
      name: "Spiderman",
      realName: "Peter Benjamin Parker",
      power: "Spider sense"
    },
    {
      id: 10,
      name: "Black Panther",
      realName: "T'Challa",
      power: "Vibranium"
    },
    {
      id: 11,
      name: "Daredevil",
      realName: "Matt Murdock",
      power: "Blind sense"
    }
  ]
};

//Get all data of superheroes

app.get("/avengersHeroes", (req, res) => {
  res.send({
    count: avengersHeroes.data.length,
    data: avengersHeroes.data
  });
});

//Search Superheroes by name

app.get("/avengersHeroes/search", (req, res) => {
  const queryName = req.query.name.toLowerCase();

  const foundHero = avengersHeroes.data.find(hero => {
    return hero.name.toLowerCase().includes(queryName);
  });

  res.send({
    query: req.query,
    data: foundHero
  });
});

//Get superheroes by Id

app.get("/avengersHeroes/:id", (req, res) => {
  const hero = avengersHeroes.data.find(hero => {
    return hero.id === Number(req.params.id);
  });

  res.send({
    data: hero
  });
});

//Save new hero

app.post("/avengersHeroes", (req, res) => {
  const newHeroes = {
    id: avengersHeroes.next_id,
    name: req.body.name,
    realName: req.body.realName,
    power: req.body.power
  };

  const newavengersHeroes = {
    next_id: avengersHeroes.next_id + 1,
    data: avengersHeroes.data.concat(newHeroes)
  };

  avengersHeroes = newavengersHeroes;

  res.send({
    newdata: newHeroes,
    data: avengersHeroes
  });
});

//Delete all superheroes

app.delete("/avengersHeroes", (req, res) => {
  avengersHeroes.data.splice(0, avengersHeroes.data.length);

  res.send({
    data: avengersHeroes.data
  });
});

//delete superheroes by id

app.delete("/avengersHeroes/:id", (req, res) => {
  const deleteHeroes = avengersHeroes.data.filter(
    item => item.id !== Number(req.params.id)
  );

  avengersHeroes.data = deleteHeroes;

  res.send({
    data: avengersHeroes.data
  });
});

//Updata data superheroes by id

app.put("/avengersHeroes/:id", (req, res) => {
  avengersHeroes.data[req.params.id - 1] = {
    id: req.params.id,
    name: req.body.name,
    realName: req.body.realName,
    power: req.body.power
  };

  res.send({
    data: avengersHeroes.data
  });
});

app.listen(port, () => console.log("4000"));
