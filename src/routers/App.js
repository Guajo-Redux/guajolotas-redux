import { ChakraProvider } from '@chakra-ui/react';
import Login from '../containers/Login/Login.jsx'
import Registro from '../containers/Registro/Registro.jsx'



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <Login /> */}
        <Registro/>
      </ChakraProvider>
    </div>
  );
}

export default App;
