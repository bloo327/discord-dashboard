import { React, useState } from 'react'
import { FaBell, FaGithub, FaUserFriends } from 'react-icons/fa'
import AlertDivider from '../Dividers/AlertDivider'
import Nba from '../Content/Nba';
import Github from '../Content/Github';
import { FaBasketballBall, FaChevronDown, FaRegBell, FaCheck } from 'react-icons/fa';
import Post from '../Content/Post';

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

            <div className='alerts-content pb-1' id='alertsContent'>
                <AlertDivider id='adivider' />
                <AlertIcon dataSet={alertSetContent} icon={ <FaBasketballBall name='NBA-Tracker' size='20' content={<Nba/>}/>  } />
                    {/* Alert expandable content */}
                    <div className='hidden alertactive w-11/12 mx-auto -mt-4 rounded-md mb-4 h-auto bg-gray-600 dark:bg-gray-400'>
                        <Post name='Brendan' timestamp='just now' text={
                            <div className='alert-nba-wrap'>
                                <h1 className='text-xl'>
                                    Want to search up specific NBA player stats? Try it out on the server page!
                                    <p className='text-xs'>powered by the <a className='text-blue-400' target='_blank' rel="noreferrer" href="http://www.balldontlie.io/#introduction">Balldontlie API</a></p>
                                </h1>
                            </div>
                        } />
                    </div>
                <AlertIcon dataSet={alertSetContent} icon={ <FaGithub name='Github Repo' size='20' content={<Github/>}/>  } />
                    {/* Alert expandable content */}
                    <div className='hidden alertactive w-11/12 mx-auto -mt-4 rounded-md mb-4 h-auto bg-gray-600 dark:bg-gray-400'>
                        <Post name='Brendan' timestamp='just now' text={
                            <div className='github-wrap'>
                                <h1 className='text-xl'>
                                    Thanks for visiting the repo!
                                    <p className='text-md'>Feel free to leave any comments/questions!</p>
                                </h1>
                                <div className='pt-5'>
                                <a className='text-md text-blue-400' target='_blank' rel="noreferrer" href='https://github.com/bloo327/tailwind-dashboard'>Link to repository here</a>
                                </div>
                            </div>
                        }/>
                    </div>
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

    const handleExpand = (e) => {
        let active = document.getElementsByClassName('alertactive');
        let eachalert = document.getElementsByClassName('each-alert')
        if (eachalert[0].contains(e.currentTarget)) {
            if (!expanded) {
                active[0].className = active[0].className.replace('', 'hidden')
            } else {
                active[0].className = active[0].className.replace('hidden', '')
            }
        } else {
            if (!expanded) {
                active[1].className = active[1].className.replace('', 'hidden')
            } else {
                active[1].className = active[1].className.replace('hidden', '')
            }
        }
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
            <h1 className='font-bold'> {icon.props.name}</h1>
            <AlertOptions />
        </div>
    )
}

const AlertOptions = () => {
    //Removing alert on check icon
    const handleClick = (e) => {
        let alertswrap = document.getElementById('alertsContent')
        let eachalert = document.getElementsByClassName('each-alert')
        let active = document.getElementsByClassName('alertactive');
        if (eachalert[0].contains(e.currentTarget)) {
            alertswrap.removeChild(eachalert[0])
            active[0].remove()
        } else {
            alertswrap.removeChild(eachalert[1])
            active[1].remove()
        }
    }

    return (
        <div className='bell-check flex ml-20 justify-between'>
            <div className='bell-icon flex justify-center items-center w-9 h-9 rounded-3xl mr-2 bg-gray-700 drop-shadow-lg cursor-pointer hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-400 transition-all duration-150'><FaRegBell /></div>
            <div className='check-icon flex justify-center items-center w-9 h-9 rounded-3xl bg-gray-700 drop-shadow-lg cursor-pointer hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-400 transition-all duration-150' onClick={handleClick}><FaCheck /></div>
        </div>
    )
}

export default Alerts