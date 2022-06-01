import { useState, useEffect } from 'react'
import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'
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
                    <FaHashtag className='text-lg text-gray-400'/>
                    <h1 className='font-bold text-lg servername pl-0.5'>Welcome</h1>
                </div>
                <div className='navright'>
                    <ThemeToggle />
                    {dimensions.width >= 640 ? <Search /> : 
                        <>
                            <input className='search-input hidden' type='text' placeholder='Search...' />
                            <FaSearch size='23' className='text-gray-500 my-auto' />
                        </>
                    }
                    <FaRegBell size='24' className='top-nav-icon -mr-1' />
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
            {darkTheme ? (<FaSun size='23' onClick={handleMode} className='top-navigation-icon' />) 
            : (<FaMoon size='23' onClick={handleMode} className='top-navigation-icon' />)}
        </span>
  );
};

const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search...' />
      <FaSearch size='18' className='text-gray-500 my-auto' />
    </div>
  );

export default TopNavBar