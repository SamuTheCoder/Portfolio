import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const projects:{ name: string, description: string }[] = [{name: "Project", description: "This is my Project"}]
  return (
    {
      projects.map( project => { return ()})
        }
  )
}


export default App;
