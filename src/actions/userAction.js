import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadUserP } from '../helpers/loadHelp';
import { types } from '../types/types'

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

// Actualizar la foto de perfil::

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const user = getState().user;

        const fileUrl = await fileUpload(file);

        user[0].image = fileUrl

        dispatch(startSaveUser(user[0]))
    }
}

export const startSaveUser = (user) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        console.log(user);
        console.log(uid);

        const userToFirestore = { ...user };
        delete userToFirestore.id;

        await db.doc(`profile/user/${uid}/${user.id}`).update(userToFirestore);

        dispatch(setUser(user.id, userToFirestore));

        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
}