import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <ChakraProvider>
      <DefaultLayout />
    </ChakraProvider>
  );
}

export default App;
