import { useState, useEffect } from 'react'
import { FaSearch, FaHashtag, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'
import useDarkMode from '../../Hooks/useDarkMode'

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
                    {dimensions.width >= 640 ? <Search /> : 
                        <>
                            <input className='search-input hidden' type='text' placeholder='Search...' />
                            <FaSearch size='23' className='search-icon' />
                        </>
                    }
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
        <span onClick={handleMode} className='theme-toggle'>
            {darkTheme ? (<FaMoon size='23' onClick={handleMode} className='top-navigation-icon' />) 
            : (<FaSun size='25' onClick={handleMode} className='top-navigation-icon' />)}
        </span>
  );
};

const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search...' />
      <FaSearch size='18' className='search-icon' />
    </div>
  );

export default TopNavBar