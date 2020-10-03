import React, { FC, useState } from 'react';

type FileSelectToStringProps = {
  fileType: string;
  fileAccepted: (isAccepted: boolean) => void;
  onLoad: (csvString: string) => void;
  onError: (error: Event) => void;
};

export const FileSelectToString: FC<FileSelectToStringProps> = ({ fileType, fileAccepted, onLoad, onError}) => {
  const [message, setMessage] = useState('');

  // get csv file and read it
  function selectFile(fileList: FileList | null):void {
    if(!fileList) return;

    const reader = new FileReader();
    const file = fileList[0]
    // get the file info
    if(!file) return;
    if (file.type !== fileType) {
      setMessage('Wrong File Type..');
      fileAccepted(false);
      return;
    }

    reader.onload = () => {
      if(!reader.result) return;
      setMessage('File Loaded!');
      fileAccepted(true);
      onLoad(reader.result.toString());
    };
    reader.onerror = (e) => {
      setMessage('Error Loading File..');
      fileAccepted(false);
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
