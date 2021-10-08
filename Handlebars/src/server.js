const express = require('express')
const handlebars = require('express-handlebars')
const { apiProductos } = require("./routes/apiProductos")
const { webProductos } = require("./routes/webProductos")

/* -------------------------------------- */

const app = express()
//configuraciones de hanlebars
app.engine('hbs',
    handlebars(
        {
            extname:'.hbs',                       
            defaultlayout:'index.hbs'             
        }
    )
)


//Configuracion del motor de vistas que se usara
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//espacio de rutas
app.use('/api/productos', apiProductos)
app.use('/', webProductos)



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))