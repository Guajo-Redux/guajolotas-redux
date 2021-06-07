import { types } from "../types/types"

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cartAD:
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }

        default:
            return state;
    }
}

export default cartReducer