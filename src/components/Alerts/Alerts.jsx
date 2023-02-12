import { React, useState } from 'react'
import { FaBell, FaGithub, FaUserFriends } from 'react-icons/fa'
import AlertDivider from '../Dividers/AlertDivider'
import Nba from '../Content/Nba';
import Github from '../Content/Github';
import { FaBasketballBall, FaChevronDown, FaRegBell, FaCheck } from 'react-icons/fa';

const Alerts = ({ alertSetContent }) => {

    return (
        <div className='alerts-wrap'>
            <div className='alerts-top-wrap flex'>
                <FaBell className='mt-3 ml-3' size='20'/>
                <h1 className='text-xl h-12 p-2 font-bold'>Alerts</h1>
            
                <div className='friendrq-wrap' title='Friend Requests'>
                    <FaUserFriends className='friendrq-icon' size='15' />
                    <p className='text-sm font-bold ml-2 mt-0.5 drop-shadow-lg'>0</p>
                </div>
            </div>

            <div className='alerts-content'>
                <AlertDivider />
                <AlertIcon dataSet={alertSetContent} icon={ <FaBasketballBall name='NBA-Tracker' size='20' content={<Nba/>}/>  } />
                <AlertIcon dataSet={alertSetContent} icon={ <FaGithub name='Github Repo' size='20' content={<Github/>}/>  } />
            </div>

        </div>
    )
}

const AlertIcon = ({ icon, dataSet }) => {
    const [expanded, setExpanded] = useState(false)
    
    const handleClick = (e) => {
        let curr = document.getElementsByClassName('sbactive');
        if (curr.length > 0) {
            curr[0].className = curr[0].className.replace('sbactive', '');
        }
        let dupes = document.getElementsByClassName(e.currentTarget.classList[0])
        dupes[0].classList.add('sbactive');

        dataSet({
            name: icon.props.name,
            display: icon.props.content
        })
    };

    const handleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={`each-alert w-full ml-3 mb-6 flex items-center`}>
            <FaChevronDown size='12' onClick={handleExpand} className={
                    expanded ? 'transition-all ease-out text-opacity-80 my-auto mr-1 cursor-pointer' 
                    : 'transition-all ease-in -rotate-90 text-opacity-80 my-auto mr-1 cursor-pointer' 
                    } 
                />
            <button onClick={handleClick} className={`${icon.props.name} alert-icon group cursor-pointer mr-4`} >
                { icon }
            </button>
            <h1 className='font-bold '> {icon.props.name}</h1>
            <AlertOptions />
        </div>
    )
}

const AlertOptions = () => {

    const handleClick = () => {
        console.log(document.getElementsByClassName('each-alert'))
    }

    return (
        <div className='bell-check flex ml-20 justify-between'>
            <div className='bell-icon flex justify-center items-center w-9 h-9 rounded-3xl mr-2 bg-gray-700 drop-shadow-lg cursor-pointer hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-400 transition-all duration-150'><FaRegBell /></div>
            <div className='check-icon flex justify-center items-center w-9 h-9 rounded-3xl bg-gray-700 drop-shadow-lg cursor-pointer hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-400 transition-all duration-150' onClick={handleClick}><FaCheck /></div>
        </div>
    )
}

export default Alerts