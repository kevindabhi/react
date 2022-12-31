import React from "react";
import { useState } from 'react';

function Square () {
  const [value, setValue] = useState(null);

  function HandleClick() {
    setValue("X");
  }
  
 return (
   <button className="square" onClick={HandleClick}>{value}</button>
 );
}

export default function Board() {
  return (
  <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
  </div>
  );
}
