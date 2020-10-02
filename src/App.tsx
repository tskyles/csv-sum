import React from 'react';
import './App.css';
import { FileSelectToString } from './components/FileSelectToString/FileSelectToString';

function App() {

  
  return (
    <div className='app-container'>
      <FileSelectToString 
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
