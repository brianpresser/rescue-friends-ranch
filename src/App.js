import './App.css';
import React from 'react';
import Demo from './topNav';
import Demo2 from './List';

function App() {

  return (
    <div className="App">
      <Demo></Demo>
      <h2 
        style={{
          marginTop: '80px', 
          marginBottom: '0', 
          backgroundColor: '#F8F8F8', 
          paddingTop: '15px', 
          paddingBottom: '5px', 
          boxShadow: '0 4px 2px -2px #DFDFDF',
        }}>
          <span style={{color: '#919191'}}>8 Matches..</span>
      </h2>
      <Demo2></Demo2>
      {/* <FilterModal></FilterModal> */}
    </div>
  );
}

export default App;
