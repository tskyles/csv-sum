import React, { FC, useEffect, useState } from 'react';

type SumDisplayProps = {
  showButton: boolean;
  csvString: string;
}

export const SumDisplay: FC<SumDisplayProps> = ({showButton, csvString}) => {
  const [valueSum, setValueSum] = useState<number | null>(null)

  // reset valueSum to null when the csvString changes
  useEffect(() => {
    setValueSum(null);
  }, [csvString])

  function sumCsvValues(csvString: string):void {
    if(!csvString) return;

    // break string into an array where each index is a row of the csv as a string
    const stringArray: string[] = csvString.split(/\r\n|\n/);
    let sum: number = 0;

    // iterate through the array and convert the rows from csv strings to arrays of values
    for(let i = 1; i < stringArray.length; i++){
      const rowArray: string[] = stringArray[i].split(',');

      // iterate through the row and convert the values to numbers and add them to the sum
      for(let j = 1; j < rowArray.length; j++){
        const value: number = parseInt(rowArray[j])
        if(!value) continue;
        sum += value;
      }
    }

    setValueSum(sum);
  }

  if(showButton){
    return (
      <div>
        <button onClick={() => sumCsvValues(csvString)}>Sum Values</button>
        <p>{valueSum}</p>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }

}
