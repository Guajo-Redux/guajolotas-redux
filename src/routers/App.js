import { ChakraProvider } from '@chakra-ui/react';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../containers/home/Home';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth'
import Carrito from '../containers/Cart/Carrito.jsx'


const App = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(async (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        // dispatch(startLoadingNotes(user.uid));
        // dispatch(startLoadingTask(user.uid));

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])


  if (checking) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />
          <PrivateRoute  path='/carrito' component={Carrito} isAuthenticated={isLoggedIn} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
