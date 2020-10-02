import React from 'react';
import './App.css';
import { FileSelector } from './components/FileSelector/FileSelector';

function App() {

  
  return (
    <div className='app-container'>
      <FileSelector 
        fileType='text/csv' 
        onLoad={(string) => console.log(string)} 
        onError={(e) => console.error(e)}
      />
      <button>Sum Values</button>
      {/* <SumDisplay/> */}
    </div>
  );
}

export default App;
