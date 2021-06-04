import { ChakraProvider } from '@chakra-ui/react';
import Login from '../containers/Login/Login.jsx'



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    </div>
  );
}

export default App;
