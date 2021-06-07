import { loadUserP } from '../helpers/loadHelp';
import {types} from '../types/types'

export const startLoadingUser = (id) => {
    return async (dispatch) => {

        const user = await loadUserP(id);
        dispatch(setUser(user));
    }
}

export const setUser = (user) => ({
    type: types.loadUser,
    payload: user
});