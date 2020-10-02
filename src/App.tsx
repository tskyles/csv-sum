import React from 'react';
import './App.css';
import { FileSelectToString, SumDisplay } from './components';

function App() {

  
  return (
    <div className='app-container'>
      <FileSelectToString 
        fileType='text/csv' 
        onLoad={(string) => console.log(string)} 
        onError={(e) => console.error(e)}
      />
      <button>Sum Values</button>
      <SumDisplay/>
    </div>
  );
}

export default App;
