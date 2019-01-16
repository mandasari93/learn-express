const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

let marvelHeroes = {
    data: [
        {
            id: 1,
            name: "Thor",
            power: "Lightning"
        },
        {
            id: 2,
            name: "Ironman",
            power: "Jarvis"
        }, 
        {
            id: 3,
            name: "Captain Marvel",
            power: "She can do everything"
        },
        {
            id: 4,
            name: "Hulk",
            power: "Become a Giant"
        },
        {
            id: 5,
            name: "Deadpool",
            power: "Regeneration"
        },
        {
            id: 6,
            name: "Doctor Strange",
            power: "Magic"
        },
        {
            id: 7,
            name: "Captain America",
            power: "Super power"
        },
        {
            id: 8,
            name: "Antman",
            power: "Resize"
        },
        {
            id: 9,
            name: "Spiderman",
            power: "Spider sense"
        },
        {
            id: 10,
            name: "Black Panther",
            power: "Vibranium"
        },
        {
            id: 11,
            name: "Thanos",
            power: "Superhuman"
        }
    ]
}

//Get all data of superheroes

app.get("/marvelHeroes", (req, res) => {
    res.send({
        count: marvelHeroes.data.length,
        data: marvelHeroes.data
    })
})

//Search Superheroes by name

app.get("/marvelHeroes/search", (req, res) => {
    const queryName = req.query.name.toLowerCase()

    const foundHero = marvelHeroes.data.find(hero => {
        return hero.name.toLowerCase().includes(queryName)
    })

    res.send({
        query: req.query,
        data: foundHero
    })
})

//Get superheroes by Id

app.get("/marvelHeroes/:id", (req, res) => {
    const hero = marvelHeroes.data.find(hero => {
        return hero.id === Number(req.params.id)
    })

    res.send({
        data: hero
    })
})

app.listen(port, () => console.log("4000"))