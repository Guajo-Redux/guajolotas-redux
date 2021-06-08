import { db } from "../firebase/firebase-config"
import { types } from "../types/types"
import { loadCart } from '../helpers/loadHelp'

export const AddCarrito = (nombre, precio, imagen, cantidad) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newProduct = {
            nombre,
            precio,
            imagen,
            cantidad
        }

        await db.collection(`cart/${uid}/productos`).add(newProduct)
        dispatch(addNewProduct(uid, newProduct))
        dispatch(startLoadingCart(uid))
    }
}

export const addNewProduct = (uid, producto) => ({
    type: types.cartAD,
    payLoad: {
        uid,
        ...producto
    }
})

export const startLoadingCart = (id) => {
    return async (dispatch) => {

        const cart = await loadCart(id);
        dispatch(setCart(cart));
    }
}

export const setCart = (cart) => ({
    type: types.cartLoad,
    payload: cart
});

export const startSaveCart = ( cart ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const cartToFirestore = { ...cart };
        delete cartToFirestore.id;

        await db.doc(`cart/${uid}/productos/${cart.id}`).update( cartToFirestore );

        dispatch( refreshCart( cart.id, cartToFirestore ) );
        dispatch(startLoadingCart(uid))
    }
}

export const refreshCart = ( id, cart ) => ({
    type: types.cartUpdate,
    payload: {
        id,
        cart: {
            id,
            ...cart
        }
    }
});

export const activeCart = (id, cart) => ({
    type: types.cartActive,
    payload: {
        id,
        ...cart
    }
});

export const startDeletingCart = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;

        await db.doc(`cart/${uid}/productos/${ id }`).delete();

        dispatch( deleteCart(id) );
    }
}

export const deleteCart = (id) => ({
    type: types.cartDelete,
    payload: id
});