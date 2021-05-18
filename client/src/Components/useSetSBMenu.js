import {useState} from 'react';
import {MainMenu} from './SideBarComponents/MainMenu';

export const useSetSBMenu = (SBMenu,setSBMenu) =>{
    const [SBMenu,setSBMenu] = useState(<MainMenu/>);
}