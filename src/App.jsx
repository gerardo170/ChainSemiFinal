import React from 'react';
import { ChainProvider } from '../src/Context/ChainContext';
import { AppUI } from './AppUI';


function App() {

  return (
    <ChainProvider>
      <AppUI />
    </ChainProvider>
  );
}

export default App;
