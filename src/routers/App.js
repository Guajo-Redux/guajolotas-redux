import { ChakraProvider } from '@chakra-ui/react';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../containers/home/Home';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const App = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(async (user) => {

      if (user?.uid) {
        // dispatch(login(user.uid, user.displayName));
        // setIsLoggedIn(true);
        // dispatch(startLoadingNotes(user.uid));
        // dispatch(startLoadingTask(user.uid));

      } else {
        // setIsLoggedIn(false);
      }

      // setChecking(false);

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
          <PublicRoute path="/auth" component={AuthRouter}/>
          <PrivateRoute></PrivateRoute>
          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    </ChakraProvider>


  )


}

export default App;
