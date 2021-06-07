import { types } from "../types/types"

export const AddCarrito = (nombre, precio, imagen, cantidad, id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newProduct = {
            nombre,
            precio,
            imagen,
            cantidad,
            id
        }

        await db.collection(`${uid}/cart/productos`).add(newProduct)
        dispatch(addNewProduct(uid, newProduct))
    }
}

export const addNewProduct = (uid, producto) => ({
    type: types.cartAD,
    payLoad: {
        uid,
        ...producto
    }
})