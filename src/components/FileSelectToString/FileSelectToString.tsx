import React, { FC, useState } from 'react';

type FileSelectToStringProps = {
  fileType: string;
  onLoad: (csvString: string | ArrayBuffer) => void;
  onError: (error: Event) => void;
};

export const FileSelectToString: FC<FileSelectToStringProps> = ({ fileType, onLoad, onError}) => {
  const [message, setMessage] = useState('');

  // get csv file and read it
  function selectFile(fileList: FileList | null) {
    if(!fileList) return;
    const file = fileList[0]
    // get the file info

    if (file.type !== fileType) {
      setMessage('Wrong File Type..');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if(!reader.result) return;
      setMessage('File Loaded!');
      onLoad(reader.result);
    };
    reader.onerror = (e) => {
      setMessage('Error Loading File..');
      onError(e)
    };

    reader.readAsText(file);
  }

  return (
    <div className="file-select-container">
      <label>Upload .csv file:</label>
      <input type='file' onChange={e => selectFile(e.target.files)}></input>
      <p>{message}</p>
    </div>
  )
}
