//Third Party Imports
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

//First Party Imports
import './App.scss';
import { Navbar } from './components/Navbar';
import { darkModeState } from './RecoilState';
import { Transpo } from './components/Transpo';
import { ITransit } from './interfaces/ITransit';

const transits: ITransit[] = [
  {type: "Walk", price: 1, distance: 1, carbon: 0},
  {type: "Bike", price: 1, distance: 2, carbon: 0},
  {type: "Scooter", price: 1, distance: 1.5, carbon: 0},
  {type: "Bus", price: 1, distance: 2.5, carbon: 1},
  {type: "Uber", price: 1, distance: 3, carbon: 3},
]

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)
  const [selected, setSelected] = useState(transits[0])
  const [selIndx, setSelIdx] = useState(0)
  const diameter = 250

  return (
    <>
      <div className='screen' dark-mode={darkMode.toString()}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div style={{display: 'flex', alignContent: 'stretch', flex: 19}}>
          <div className="secondary borderRadius-2" style={{flex: 1, margin: 10, padding: "1%", alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <input type="text" className='secondary borderRadius-1 textColor' style={{padding: 5, width: "100%", marginBottom: 10}} placeholder="Location..."/>
            <div style={{flex: 1, alignSelf: 'stretch', maxHeight: '100%'}}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', fontSize: 24}}>+</div>
              {transits.map((transit, index) => (
                <Transpo transit={transit} onPress={() => {setSelected(transits[index]);setSelIdx(index)}} clicked={index===selIndx}/>
              ))}
            </div>
          </div>
          <div style={{flex: 3, margin: 10, padding: 0}}>
            <img className='borderRadius-2' src="/map2.png" alt="image" style={{width: "100%", height: "100%", objectFit: 'cover'}}/>
          </div>
        </div>
      </div>

      <div className='borderRadius-c atCenter' style={{position: 'absolute', left: "76%", top: "64%", width: diameter*selected.distance, height: diameter*selected.distance,
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(237, 153, 194, 0.5) 25%, rgba(38, 120, 184, 0.5) 50%, rgba(247, 214, 61, 0.5) 75%, rgba(89, 26, 26, 0.5) 98%)'}}></div>
      <div className='borderRadius-c atCenter' style={{position: 'absolute', left: "76%", top: "64%", width: 10, height: 10,
      background: 'black'}}></div>

      <div className='glassmorphic borderRadius-2' style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: 5, right: 25, bottom: 25, width: 250, height: 60}}>
        <div style={{fontWeight: 'bolder', marginBottom: 5}}>Convenience</div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{fontWeight: 'bolder'}}>More</div>
          <div className='borderRadius-2' style={{borderWidth: 2, borderColor: 'black', borderStyle: 'solid', width: 140, marginLeft: 7, marginRight: 7,
          background: 'linear-gradient(0.25turn, rgb(255, 255, 255) 0%, rgb(237, 153, 194) 25%, rgb(38, 120, 184) 50%, rgb(247, 214, 61) 75%, rgb(89, 26, 26) 98%)'}}></div>
          <div style={{fontWeight: 'bolder'}}>Less</div>
        </div>
      </div>
      
    </>
  )
}

export default App;
