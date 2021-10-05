const express = require('express')
const Contenedor =require('./Contenedor.js');
/* -------------------------------------- */
const inventario =new Contenedor('productos.txt')
/* -------------------------------------- */

const app = express()

//Configuracion del motor de vistas que se usara
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//espacio de rutas
//app.use('/api/productos', routerProductos)

app.get("/",async (req,res)=>{
    let items = await inventario.getAll()
    const tit = 'Vista de productos'

    if (items.length == 0){
        res.render('sinProducto', { titulo:tit})      
    }
    else{
        res.render('producto', { titulo:tit, productos:items})
    }
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))