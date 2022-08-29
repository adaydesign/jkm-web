import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from './layouts/DefaultLayout';
import { theme } from './utils/theme'

function App() {

  return (
    <ChakraProvider theme={theme}>
        <DefaultLayout />
    </ChakraProvider>
  );
}

export default App;
