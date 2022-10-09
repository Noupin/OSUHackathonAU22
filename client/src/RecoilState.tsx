//Third Party Imports
import { atom } from "recoil";


export const darkModeState = atom<boolean>({
    key: 'darkMode',
    default: false,
});
