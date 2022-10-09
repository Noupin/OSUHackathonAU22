//Third Party Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { SetterOrUpdater } from 'recoil';

//First Party Imports
import { Button } from './Button';


interface INavbar {
  darkMode: boolean
  setDarkMode: SetterOrUpdater<boolean>
}

export const Navbar = (props: INavbar) => {
  const { darkMode, setDarkMode } = props;

  return(
    <div className="navbar sticky" style={{flex: 1, paddingLeft: "1%", paddingRight: "1%"}}>
      <h2>Team Red</h2>
      <Button className="secondary borderRadius-c" onPress={() => setDarkMode(current => !current)}
      style={{padding: 5, justifySelf: 'end', width: 40, height: 40}}>
        <FontAwesomeIcon className="textColor" icon={darkMode ? faLightbulb : faMoon} style={{fontSize: "1.25em"}}/>
      </Button>
    </div>
  );
}