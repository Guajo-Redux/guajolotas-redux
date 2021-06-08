import { loadProducts, loadSearch } from "../helpers/loadHelp";
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

export const startSearch = (search) => {
    return async (dispatch) => {
        const producto = await loadSearch(search)
        dispatch(setSearch(producto))
    }
}

export const setSearch = (products) => ({
    type: types.searchProduct,
    payload: products
});