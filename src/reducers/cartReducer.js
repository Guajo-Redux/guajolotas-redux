import { types } from "../types/types"

const initialState = {
    cart: [],
    active: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cartAD:
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case types.cartLoad:
            return {
                ...state,
                cart: [...action.payload]
            }
        case types.cartUpdate:
            return {
                ...state,
                cart: state.cart.map(
                    crt => crt.id === action.payload.id
                        ? action.payload.crt
                        : crt
                )
            }
        case types.cartActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.cartDelete:
            return {
                ...state,
                active: null,
                cart: state.cart.filter(crt => crt.id !== action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer