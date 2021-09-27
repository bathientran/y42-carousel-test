import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const personas = [
    'anyone',
    'business analysts',
    'data scientists',
    'performance marketeers',
    'you'
]
  const [personasState, setPersonasState] = useState(0)

  useEffect(() => {
    let timeout
    if (personasState !== personas.length -1) {
      timeout = setTimeout(() => setPersonasState((personasState + 1)%(personas.length)), 1800);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [personas, personasState])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{fontSize: 28, fontWeight: 800, width: 450}}>
        The scalable data platform that{' '}
        <span style={{color: '#6bedd4'}}>{personas[personasState]}</span> can run.
        </div>  
      </header>
    </div>
  );
}

export default App;
