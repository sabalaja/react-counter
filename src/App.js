import React from 'react';
import './App.css';

import Counter from './Counter';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading initText='Clicks counter' />
      </header>
      <Counter initValue={93} />
      <Counter initValue={6} />
      <Counter initValue={13} />
    </div>
  );
}

export default App;
