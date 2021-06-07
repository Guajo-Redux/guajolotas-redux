import { loadProducts } from "../helpers/loadHelp";
import { types } from "../types/types";

export const startLoadingProducts = (id) => {
    return async (dispatch) => {

        const products = await loadProducts(id);
        dispatch(setProducts(products));
    }
}

export const setProducts = (products) => ({
    type: types.productsLoad,
    payload: products
});

export const activeProduct = (id, product) => ({
    type: types.productActive,
    payload: {
        id,
        ...product
    }
});


export const startLoadingBebidas = (id) => {
    return async (dispatch) => {

        const bebidas = await loadProducts(id);
        dispatch(setProductsBebidas(bebidas));
    }
}

export const setProductsBebidas = (bebidas) => ({
    type: types.productBebidas,
    payload: bebidas
});


export const startLoadingGuajolotas = (id) => {
    return async (dispatch) => {

        const guajolotas = await loadProducts(id);
        dispatch(setProductsGuajolotas(guajolotas));
    }
}

export const setProductsGuajolotas = (guajolotas) => ({
    type: types.productGuajolotas,
    payload: guajolotas
});

// Actualizar la foto de perfil::
export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        // if ( !note.url ){
        //     delete note.url;
        // }

        // const noteToFirestore = { ...note };
        // delete noteToFirestore.id;

        // await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        // dispatch( refreshNote( note.id, noteToFirestore ) );
    }
}

// export const startUploading = (url ) => {
//     return async( dispatch, getState ) => {

//         const { active:activeNote } = getState().url;
//         const fileUrl = await fileUpload( url );
//         activeNote.url = fileUrl;

//         dispatch( startSaveNote( activeNote ) )
//     }
// }