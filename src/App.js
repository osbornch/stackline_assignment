import React from 'react';
import './App.css';
import LeftComponent from './LeftComponent';
import TopRightComponent from './TopRightComponent';
import BottomRightComponent from './BottomRightComponent';

function App() {
  return (
    <div className="App">
      <div className="left">
        <LeftComponent />
      </div>
      <div className="right">
        <TopRightComponent />
        <BottomRightComponent />
      </div>
    </div>
  );
}

export default App;
