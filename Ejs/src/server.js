const express = require('express')
const { apiProductos } = require("./routes/apiProductos")
const { webProductos } = require("./routes/webProductos")

/* -------------------------------------- */

const app = express()

//Configuracion del motor de vistas que se usara
app.set('view engine', 'ejs')

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