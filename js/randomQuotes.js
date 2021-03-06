const quote = [
    {
        "cita": "Los números perfectos, como los hombres perfectos, son muy extraños.",
        "autor": "Descartes"
    },
    {
        "cita": "El 99% de todas las estadísticas solo cuentan el 49% de la historia.",
        "autor": "Ron DeLegge"
    },
    {
        "cita": "Las matemáticas son la puerta y la llave a la ciencia.",
        "autor": "Roger Bacon"
    },
    {
        "cita": "En las matemáticas no entiendes las cosas. Te acostumbras a ellas.",
        "autor": "Johann von Neumann"
    },
    {
        "cita": "Las matemáticas expresan valores que reflejan el cosmos, incluyendo el orden, equilibrio, armonía, lógica y belleza abstracta.",
        "autor": "Deepak Chopra"
    },
    {
        "cita": "Todas las verdades de las matemáticas están vinculadas entre si.",
        "autor": "Adrien-Marie Legendre"
    },
    {
        "cita": "La vida es buena por sólo dos cosas, descubrir y enseñar las matemáticas.",
        "autor": "Simeon Poisson"
    },
    {
        "cita": "El estudio de las matemáticas, como el Nilo, comienza con minuciosidad pero termina con magnificencia.",
        "autor": "Charles Caleb Colton"
    },
    {
        "cita": "Difícilmente he conocido alguna vez a un matemático que sea capaz de razonar.",
        "autor": "Platón"
    },
    {
        "cita": "Las matemáticas del ritmo son universales. No pertenecen a un tipo particular de cultura.",
        "autor": "John McLaughlin"
    },
    {
        "cita": "¿Cómo es posible un error en las matemáticas?",
        "autor": "Henri Poincare"
    },
    {
        "cita": "Las matemáticas consisten en demostrar las cosas más obvias de la forma menos obvia.",
        "autor": "George Polye"
    },
    {
        "cita": "Las matemáticas son el arte de la explicación.",
        "autor": "Paul Lockhart"
    },
    {
        "cita": "Ninguna investigación humana puede ser llamada verdadera ciencia si no puede ser demostrada matemáticamente.",
        "autor": "Leonardo da Vinci"
    },
    {
        "cita": "En la vida real, te lo aseguro, no hay algo como el álgebra.",
        "autor": "Fran Lebowitz"
    }
]

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
