/*
PARAMETROS DE LOS PRODUCTOS
Nombre: del Producto
Descripción: del Producto
Precio: del Producto
code: Id, codigo del Producto
stock: Cantidad existente del Producto
*/

class TicketManager{
    constructor(){
        this.productos =[];
    }

    getProductos(){
        return this.productos;
    }

    addProducto(nombre, descripcion, precio, stock){
            const producto = {
                    nombre,
                    descripcion,
                    precio,
                    thumbnail,
                    code,
                    stock,
            };

            //Da error
            producto.id = this.#getID();

            //agregar lista de productos
            this.productos.push(producto);
    }

}

const ticketManager = new TicketManager();

console.log(tm.getProductos());

