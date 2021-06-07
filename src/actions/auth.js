import {types} from '../types/types'
import {googleAuthProvider, firebase, db} from '../firebase/firebase-config'
import {starLoading, finishLoading} from './uiError'


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { 
        return firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=> {
            dispatch(starLoading)
            dispatch(login(user.uid, user.displayName))
        })
        .catch (e => {
            dispatch(finishLoading)
            console.log(e);
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => { 
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName),
            )
        })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name, address) => {
    return (dispatch) => { 
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) => {

            const newUser = {
                name,
                password,
                email,
                image: 'https://bit.ly/dan-abramov',
                address,
            }
            console.log(newUser);
            await db.collection(`profile/user/${user.uid}`).add(newUser)

            dispatch(newProfile(user.uid, newUser))

            await user.updateProfile({displayName: name})
            dispatch(
                login(user.uid, user.displayName)
            )
            console.log(user);
        })
        .catch(e => {
            console.log(e);
        })
        
    }
}
export const login = (uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const starLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})

export const userData = (usuario, email) => {
    return{
        type: userData,
        payload: {
            usuario,
            email
        }
    }
}

export const newProfile = (uid, user) => {
    return {
        type: types.addUser,
        payload: {
            uid,
            ...user
        }
    }
}

export const updateProfile = () => {
    return {

    }
}