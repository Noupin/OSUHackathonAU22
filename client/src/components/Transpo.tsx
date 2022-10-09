//Third Party Imports
import React, { FC } from 'react';
import { ITransit } from '../interfaces/ITransit';
import { Progress } from './Progress';


export const Transpo: FC<{transit: ITransit, onPress?: (event?: any) => void, clicked?: boolean}> = (props) => {
  const {type, carbon, price} = props.transit;

  let color = "#55C653";
  let carbonWord = 'Enviro Friendly'
  const percent = carbon / 3.;
  console.log(percent)
  if(percent >= .66){
    color = "#C65353"
    carbonWord = 'Enviro Negative'
  }
  else if(percent >= .33){
    color = "#E2D55C"
    carbonWord = 'Enviro Neutral'
  }

  return(
    <div className={props.clicked ? "secondary borderRadius-2" : "bg borderRadius-2"} style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignSelf: 'stretch',
    marginTop: 10, marginBottom: 10, marginRight: 7, marginLeft: 7, paddingLeft: 10, paddingRight: 10}} onClick={props.onPress}>
      <h3>{type}</h3>
      <h3 style={{color: color}}>{carbonWord}</h3>
    </div>
  );
}