//Third Party Imports
import React from 'react';


interface IProgress{
  percent: number
  className?: string
}

export const Progress = (props: IProgress) => {
  const {percent, className} = props;
  const classNames = className ? ` ${className}` : "";
  let color = "#55C653";
  if(percent > 66){
    color = "#E2D55C"
  }
  else if(percent > 33){
    color = "#C65353"
  }

  return(
    <div className={'secondary borderRadius-2' + classNames}>
      <div style={{background: color, height: "100%", width: `${Math.ceil(percent)}`}}></div>
    </div>
  );
}