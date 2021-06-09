// Se importa types
import { types } from '../types/types'

// Se implementa el reducer para autenticar el usuario 
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                image: action.payload.image
            }
        case types.logout:
            return { }
        // case types.addUser:
        //     return {
        //         ...state, 
        //         profile: [action.payload, ...state.profile]
        //     }
        // case types.updateUser:
        //     return {
        //         ...state,
        //         profile: state.profile.map(p => p.id === action.payload.id
        //             ? action.payload.p
        //             :
        //             p
        //             )
        //     }
        default:
        return state;
    }
}