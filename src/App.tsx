import React, { useState } from 'react';
import './App.css';
import { FileSelectToString, SumDisplay } from './components';

function App() {
  const [csvString, setCsvString] = useState<string>('');

  return (
    <div className='app-container'>
      <h1>.CSV Upload and Sum</h1>
      <div>
        <FileSelectToString
          fileType='.csv'
          onLoad={(string) => setCsvString(string)}
          onError={(e) => console.error(e)}
        />
        <SumDisplay
          showButton={!!csvString}
          csvString={csvString}
        />
      </div>
    </div>
  );
}

export default App;
