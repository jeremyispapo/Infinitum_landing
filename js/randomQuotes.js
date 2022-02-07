import quote from './quotes.json' assert { type: "json" }

const app = document.getElementById("app")
const autor = document.getElementById("nameAutor")

const quotesComplete = quote.map(quote => (
    [quote.cita, quote.autor]
))

function random() {
    return Math.floor((Math.random() * quotesComplete.length))
}

let n = random()
let cita = quotesComplete[n][0]
let autorArray = quotesComplete[n][1]

app.innerText = cita
autor.innerText = autorArray
