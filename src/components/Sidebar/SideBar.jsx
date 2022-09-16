import { useState } from 'react';
import { BsPlusLg, BsXLg, BsChatTextFill } from 'react-icons/bs';
import { FaHome, FaGithub, FaBasketballBall, FaSnowboarding } from 'react-icons/fa';
import {IoCreate, IoGameController, IoSchool, IoFitness } from 'react-icons/io5'
import { Transition, Dialog } from '@headlessui/react'
import Home from '../Content/Home';
import Nba from '../Content/Nba';
import SnowSports from '../Content/Snowsports';
import ChatServer from '../Content/ChatServer';
import Github from '../Content/Github';

const SideBar = ({ dataSetter }) => {

    return (
        <div className='sidebar'>
            <SideBarIcon dataSet={dataSetter} icon={ <FaHome name='Home' size='25' content={<Home/>}/> } />
            <Divider />
            <SideBarIcon dataSet={dataSetter}  icon={ <BsChatTextFill name='Chat Server' size='23' content={<ChatServer/>} /> } />
            <SideBarIcon dataSet={dataSetter} icon={ <FaBasketballBall name='NBA-Tracker' size='25' content={<Nba/>}/>  } />
            <SideBarIcon dataSet={dataSetter} icon={ <FaSnowboarding name='Snow Sports' size='20' content={<SnowSports/>} /> } />
            <Divider />
            <SideBarIcon dataSet={dataSetter} icon={ <BsPlusLg name='Add a server' size='20' /> } />
            <SideBarIcon dataSet={dataSetter} icon={ <FaGithub name='Github Repo!' size='25' content={<Github/>} /> } />
        </div>
    );
};

const SideBarIcon = ({ icon, dataSet }) => {
    const [popupDisplay, setPopupDisplay] = useState(false);

    const handleClick = (e) => {
        let curr = document.getElementsByClassName('sbactive');
        if (curr.length > 0) {
            curr[0].className = curr[0].className.replace('sbactive', '');
        }
        e.currentTarget.classList.add('sbactive');

        dataSet({
            name: icon.props.name,
            display: icon.props.content
        })
    };

    //Add server modal
    return (icon.props.name === 'Add a server') ? (
        <>
            <button onClick={() => setPopupDisplay(true)} className='sidebar-icon group cursor-pointer' >
            <span className='sidebar-select group-hover:scale-100'></span>
                { icon }

                <span className='sidebar-name group-hover:scale-100'>
                    { icon.props.name }
                </span>
            </button>
            <Transition show={popupDisplay}>
                <Dialog onClose={() => setPopupDisplay(false)} className= 'flex justify-center items-center h-screen'>
                    <Transition.Child enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-250"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0" >
                        <div className='overlay fixed top-0 left-0 w-full h-full bg-tint'/>
                    </Transition.Child>
                    <Transition.Child
                    enter="transition ease-in duration-300 transform"
                    enterFrom="-translate-y-2 opacity-50"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition ease-in duration-275 transform"
                    leaveFrom="translate-y-0 opacity-100"
                    leaveTo="-translate-y-3 opacity-0"
                    className='relative h-3/5 w-1/4 bg-white shadow-lg rounded-md my-auto p-4'
                    >
                        <div className='popup-header'>
                            <button className='absolute top-4 right-4 text-black' onClick={() => setPopupDisplay(false)}><BsXLg size='20' /></button>
                            <Dialog.Title className='p-4 font-extrabold text-3xl text-center'>Create a Server!</Dialog.Title>
                            <Dialog.Description className='font-normal text-center text-lg'>What type of server would you like?</Dialog.Description>
                        </div>
                        <div className='popup-body'>
                            <div className='popup-option mb-8'>
                                <IoCreate size='30' className='popup-icon'/>
                                <h1 className='option-name'>Create my own</h1>
                            </div>

                            <h1 className='pl-2 text-sm font-bold'>START FROM A TEMPLATE</h1>
                            <div className='popup-option'>
                                <IoGameController size='30' className='popup-icon'/>
                                <h1 className='option-name'>Gaming</h1>
                            </div>
                            <div className='popup-option'>
                                <IoSchool size='30' className='popup-icon'/>
                                <h1 className='option-name'>School/Study group</h1>
                            </div>
                            <div className='popup-option'>
                                <IoFitness size='30' className='popup-icon'/>
                                <h1 className='option-name'>Fitness</h1>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    ) : (
        <button onClick={handleClick} className={icon.props.name === 'Home' ? `${icon.props.name} sbactive sidebar-icon group cursor-pointer` : `${icon.props.name} sidebar-icon group cursor-pointer`} >
            <span className='sidebar-select group-hover:scale-100'>
            </span>
            
            { icon }

            <span className='sidebar-name group-hover:scale-100'>
                { icon.props.name }
            </span>
        </button>
    )
}

const Divider = () => <hr className='sidebar-hr' />;


export default SideBar;