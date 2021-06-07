import { db } from '../firebase/firebase-config';

export const loadProducts = async (id) => {

    const productsSnap = await db.collection(`${id}`).get();
    const products = [];

    productsSnap.forEach(snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return products;
}

export const loadCart = async (id) => {

    const cartSnap = await db.collection(`${id}/cart/productos`).get();
    const cart = [];

    cartSnap.forEach(snapHijo => {
        cart.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return cart;
}