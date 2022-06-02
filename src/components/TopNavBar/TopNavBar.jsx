import { useState, useEffect } from 'react';
import { FaSearch, FaHashtag, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../Hooks/useDarkMode';

const TopNavBar = () => {
    const [dimensions, setDimensions] = useState({ height: 0, width: 640})

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
                <div className='navleft'>
                    <FaHashtag className='hashtag'/>
                    <h1 className='channel-name'>Welcome</h1>
                </div>
                <div className='navright'>
                    <ThemeToggle />
                    <Search xy={dimensions} />
                    <FaBell size='24' className='top-nav-icon -mr-1' />
                    <FaUserCircle size='24' className='top-nav-icon' />
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