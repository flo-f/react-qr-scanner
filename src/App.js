import React from 'react';
import QrScanner from './QrScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Demo</h1>
        <QrScanner />
      </header>
    </div>
  );
}

export default App;
