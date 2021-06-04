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