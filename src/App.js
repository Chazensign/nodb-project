import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './components/routes'

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
