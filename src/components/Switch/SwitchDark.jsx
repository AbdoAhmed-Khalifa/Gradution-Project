import 'rsuite/Toggle/styles/index.css';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { Toggle } from 'rsuite';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkMode';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
export default function SwitchDark() {

    const { darkMode, setDarkMode } = useContext(DarkModeContext)


    return (
        <>

            <Toggle className=' size-15' checkedChildren={<MdDarkMode className='text-2xl text-black' />} unCheckedChildren={<MdLightMode  className='text-2xl text-yellow-500' />} onChange={() => setDarkMode(darkMode === 'light' ? 'dark' : 'light')} />
        </>
    );
}