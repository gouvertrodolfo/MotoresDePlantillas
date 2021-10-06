const { Router } = require('express');


const webProductos = Router();
const Contenedor = require("../Contenedor")

const inventario =new Contenedor('productos.txt')
/* -------------------------------------- */

webProductos.get("/",(req,res)=>{
     res.render('formulario.hbs', { titulo:"Agregar Producto"})
})

webProductos.post("/", async (req, res) => {
         let producto = req.body
         const id = await inventario.save(producto)
         res.redirect('/productos/Listado')
})

webProductos.get("/Listado", async (req,res)=>{
    let items = await inventario.getAll()
    const title = 'Lista de productos'

    if (items.length == 0){
        res.render('sinProducto.hbs', { titulo:title})      
    }
    else{
        res.render('tablaProductos.hbs', { titulo:title, productos:items})
    }
})

exports.webProductos = webProductos;