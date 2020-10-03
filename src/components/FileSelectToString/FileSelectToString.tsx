import React, { FC, MutableRefObject, useRef, useState } from 'react';
import './style.css';

type FileSelectToStringProps = {
  fileType: string;
  fileAccepted: (isAccepted: boolean) => void;
  onLoad: (csvString: string) => void;
  onError: (error: Event) => void;
};

export const FileSelectToString: FC<FileSelectToStringProps> = ({ fileType, fileAccepted, onLoad, onError}) => {
  const hiddenFileInput = useRef() as MutableRefObject<HTMLInputElement>;
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  // get csv file and read it
  function selectFile(fileList: FileList | null):void {
    if(!fileList) return;

    const reader = new FileReader();
    const file = fileList[0]
    console.log(file);

    if(file) setFileName(file.name);
    // get the file info
    // if (file.type !== fileType) {
    //   setMessage('Wrong File Type..');
    //   fileAccepted(false);
    //   return;
    // }

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

  function handleClick() {
    hiddenFileInput.current.click();
  }

  return (
    <div className="file-select-container">
      <label>Choose a .csv file to upload:</label>
      <div>
        <input
          type='text'
          readOnly={true}
          value={fileName}
        />
        <button onClick={handleClick}>Browse</button>
      </div>
      <input
        className='hidden'
        type='file'
        ref={hiddenFileInput}
        onChange={e => selectFile(e.target.files)} accept={fileType}
      />
      <p>{message}</p>
    </div>
  )
}
