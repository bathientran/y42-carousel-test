import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const personas = [
    'anyone',
    'software engineers',
    'data scientist',
    'performance marketeers',
    'data engineers',
    'financial analysts',
    'data analyst',
]
  const [personasState, setPersonasState] = useState(0)

  useEffect(() => {
    let timeout = setTimeout(() => setPersonasState((personasState + 1)%(personas.length)), 1800);

    return () => {
      clearTimeout(timeout);
    };
  }, [personas, personasState])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{fontSize: 28, fontWeight: 800, width: 500}}>
        The scalable data platform that{' '}
        <span style={{color: '#6bedd4'}}>{personas[personasState]}</span> can run.
        </div>  
      </header>
    </div>
  );
}

export default App;
