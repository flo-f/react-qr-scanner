import React from 'react';
import QrScanner from './QrScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QrScanner style={{ width: '100%' }}/>
      </header>
    </div>
  );
}

export default App;
