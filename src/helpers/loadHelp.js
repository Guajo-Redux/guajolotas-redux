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

    const cartSnap = await db.collection(`cart/${id}/productos`).get();
    const cart = [];

    cartSnap.forEach(snapHijo => {
        cart.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return cart;
}

export const loadUserP = async (id) => {

    const userSnap = await db.collection(`profile/user/${id}`).get();
    const user = [];

    userSnap.forEach(snapHijo => {
        user.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return user;
}

export const loadSearch = async (search) => {

    // const respuestaG = await db.collection(`/guajolotas/`).where("nombre", "==", search).get()
    // const respuestaB = await db.collection(`/bebidas/`).where("nombre", "==", search).get()
    // const respuestaT = await db.collection(`/tamales/`).where("nombre", "==", search).get()
    const respuestaG = await db.collection(`/guajolotas/`).get()
    const respuestaB = await db.collection(`/bebidas/`).get()
    const respuestaT = await db.collection(`/tamales/`).get()

    const productosG = [];
    const productosB = [];
    const productosT = [];

    respuestaG.forEach(snapHijo => {
        productosG.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    respuestaB.forEach(snapHijo => {
        productosB.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    respuestaT.forEach(snapHijo => {
        productosT.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    const busqueda = []

    const busquedaT = productosT.filter(productos => productos.nombre.toLowerCase().includes(search))
    const busquedaG = productosG.filter(productos => productos.nombre.toLowerCase().includes(search))
    const busquedaB = productosB.filter(productos => productos.nombre.toLowerCase().includes(search))

    console.log(busquedaT);
    console.log(busquedaG);
    console.log(busquedaB);

    if(busquedaT !== []){
        busquedaT.map(p => {
            busqueda.push(p)
        })
    }

    if(busquedaG !== []){
        busquedaG.map(p => {
            busqueda.push(p)
        })
    }

    if(busquedaB !== []){
        busquedaB.map(p => {
            busqueda.push(p)
        })
    }

    console.log(busqueda);


    return busqueda;
}