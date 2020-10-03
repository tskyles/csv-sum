import React, { useState } from 'react';
import './App.css';
import { FileSelectToString, SumDisplay } from './components';

function App() {
  const [csvString, setCsvString] = useState<string>('');
  const [fileAccepted, setFileAccepted] = useState<boolean>(false);

  // set whether the loaded file is accepted to know whether the SumDisplay component should render
  function acceptFile(accepted: boolean): void {
    // if not accepted reset the csv string to reset the valueSum in SumDisplay
    if(!accepted) setCsvString('');
    setFileAccepted(accepted);
  }

  return (
    <div className='app-container'>
      <FileSelectToString 
        fileType='text/csv' 
        fileAccepted={(isAccepted) => acceptFile(isAccepted)}
        onLoad={(string) => setCsvString(string)} 
        onError={(e) => console.error(e)}
      />
      <SumDisplay 
        showButton={fileAccepted}
        csvString={csvString}
      />
    </div>
  );
}

export default App;
