import React from 'react';
import Provider from './context';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
