// App.js
import React from 'react';

import './App.css';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
    <MainContent />
    </div>
  );
};

export default App;
