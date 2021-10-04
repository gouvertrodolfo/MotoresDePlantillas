const express = require('express')
const pug = require('Pug')
const Contenedor =require('./Contenedor.js');
/* -------------------------------------- */
const inventario =new Contenedor('productos.txt')
/* -------------------------------------- */

const app = express()



//Configuracion del motor de vistas que se usara
app.set('view engine', 'Pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//espacio de rutas
//app.use('/api/productos', routerProductos)

app.get("/",async (req,res)=>{
    let producto = await inventario.getAll()
    console.log(producto)
res.render('datos.hbs', producto)
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))