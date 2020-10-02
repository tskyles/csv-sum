import React, { useState } from 'react';
import './App.css';
import { FileSelectToString, SumDisplay } from './components';

function App() {
  const [csvString, setCsvString] = useState<string>('');
  
  return (
    <div className='app-container'>
      <FileSelectToString 
        fileType='text/csv' 
        onLoad={(string) => setCsvString(string)} 
        onError={(e) => console.error(e)}
      />
      <SumDisplay 
        showButton={!!csvString}
        csvString={csvString}
      />
    </div>
  );
}

export default App;
