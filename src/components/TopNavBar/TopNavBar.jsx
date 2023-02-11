import { useState, useEffect } from 'react';
import { FaSearch, FaHashtag, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../Hooks/useDarkMode';
import Alerts from '../Alerts/Alerts';
import { Transition } from '@headlessui/react'

const TopNavBar = ({ setContent }) => {
    const [dimensions, setDimensions] = useState({ height: 0, width: 640})
    const [alertWindow, setAlertWindow] = useState(false)

    const handleAlert = () => setAlertWindow(!alertWindow)

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
            <div className='top-nav text-white'>
                {/* Transition for Alert component */}
                <Transition show={alertWindow}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"> 
                    <Alerts alertSetContent={setContent}/> 
                </Transition>
                <div className='navleft'>
                    <FaHashtag className='hashtag'/>
                    <h1 className='channel-name'>Welcome</h1>
                </div>
                <div className='navright'>
                    <ThemeToggle />
                    <Search xy={dimensions} />
                    <FaBell onClick={handleAlert} title='Alerts' size='24' className='top-nav-icon -mr-1' />
                    <FaUserCircle size='24' title='User Profile' className='top-nav-icon' />
                </div>
            </div>
    )
}

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode} className='theme-toggle' title={darkTheme ? 'Dark Mode' : 'Light Mode'}>
            {darkTheme ? (<FaMoon size='23' onClick={handleMode} className='top-navigation-icon' />) 
            : (<FaSun size='25' onClick={handleMode} className='top-navigation-icon' />)}
        </span>
  );
};

const Search = ({ xy }) => {
    return (
        <div className='search'>
          <input className='search-input' type='text' placeholder='Search...' />
          <FaSearch size={xy.width <= 640 ? '23' : '18'} className='search-icon' />
        </div>
    )
};
export default TopNavBar