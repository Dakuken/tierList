import React, { useEffect } from 'react';
import Tasks from './components/Tasks';
import './App.css';


function App() {
  useEffect(() => {
    document.title = "Super tier List";
  });
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;
