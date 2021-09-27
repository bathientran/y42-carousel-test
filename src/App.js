import './App.css';
import LeftTitle from './components/leftTitle/leftTitle'
import InteractiveSection from './components/interactiveSection/interactiveSection';
import React, { useState, useEffect, useCallback } from 'react';

function App() {
  const personas = [
    'software engineers',
    'data scientist',
    'performance marketeers',
    'data engineers',
    'financial analysts',
    'data analyst',
]
  const [personasState, setPersonasState] = useState(0)
  const [persona, setPersona] = useState(personas[personasState]);

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
        The first scalable data platform that{' '}
        <span style={{color: '#6bedd4'}}>{personas[personasState]}</span> can run.
        </div>  
      </header>
    </div>
  );
}

export default App;
