export class Carrito {

    constructor() {
        this.lista = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    findAllItems() {
        // mostrarme todos sus items <> devolviendo this.lista
        return this.lista;
    }

    createItem( item ) {
        // Agregue el item al carrito <> agregar item a this.lista

        this.lista.push({
            item,
            cantidad: 1
        } )
        localStorage.setItem( 'carrito', JSON.stringify(this.lista) )
    }

    findOneByIdItem( itemId ) {
        // muestre el item <> encuentre el item en this.lista y lo devuelva
        const item = this.lista.find( element => element.id === itemId )

        if ( !item ) {
            throw new Error('No existe el item id:' + itemId)
        }

        return item;
    }


    deleteItem( itemId ) {
        // Eliminar item <> encuentre el item en this.lista y eminarlo
        const item = this.findOneByIdItem( itemId );
        const index = this.lista.indexOf( item );
        this.lista.splice( index, 1 );
        localStorage.setItem( 'carrito', JSON.stringify(this.lista) )
    }

}