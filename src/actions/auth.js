import { types } from '../types/types'
import { googleAuthProvider, firebase, facebookAuthProvider, db } from '../firebase/firebase-config'
import { starLoading, finishLoading } from './uiError'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email))
                dispatch(finishLoading())
                dispatch(starLoading())
            })
            .catch(e => {
                dispatch(finishLoading())
                console.log(e);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( async ({ user }) => {
                // const newUser = {
                //     uid: user.uid,
                //     name: user.displayName,
                //     email: user.email,
                //     image: user.photoURL,
                //     address: ''
                // }

                // await db.collection(`profile/user/${user.uid}`).add(newUser)
                // dispatch(newProfile(user.uid, newUser))

                dispatch(
                    login(user.uid, user.displayName, user.email),
                )
            })
            .catch(e => {
                console.log(e);
            }
            )
    }
}

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then( async ({ user }) => {
                // const newUser = {
                //     uid: user.uid,
                //     name: user.displayName,
                //     email: user.email,
                //     image: user.photoURL,
                //     address: ''
                // }
                
                // console.log(user);
                // await db.collection(`profile/user/${user.uid}`).add(newUser)
                // dispatch(newProfile(user.uid, newUser))
                
                console.log(user);

                dispatch(
                    login(user.uid, user.displayName, user.email)
                )
            })
            .catch(e => {
                console.log(e);
            }
            )
    }
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {

                // const newUser = {
                //     uid: user.uid,
                //     name,
                //     email,
                //     image: 'https://bit.ly/dan-abramov',
                //     address,
                // }
                // await db.collection(`profile/user/${user.uid}`).add(newUser)
                // dispatch(newProfile(user.uid, newUser))

                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName, user.email)
                )
            })
            .catch(e => {
                console.log(e);
            }
            )

    }
}
export const login = (uid, displayName, email) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email
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
    return {
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