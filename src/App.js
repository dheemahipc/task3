import React from 'react';
import './app.scss'
import Calculator from './components/Parent/Calculator.js';
const App = () => {
    return (
        <div className="app">
            <h1>calculator</h1>
            <Calculator />
      </div>
  );
};

export default App;