import { useState } from 'react';
import { BsPlusLg, BsXLg } from 'react-icons/bs';
import { FaHome, FaGithub, FaBasketballBall, FaSnowboarding } from 'react-icons/fa';
import { Transition, Dialog } from '@headlessui/react'
import Home from '../Content/Home';
import Nba from '../Content/Nba';
import Snowsports from '../Content/Snowsports';

const SideBar = ({ dataSet }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col bg-primary text-white shadow-lg'>
            <SideBarIcon dataSet={dataSet} icon={ <FaHome name='Home' size='25' content={<Home/>}/> } />
            <Divider />
            <SideBarIcon dataSet={dataSet} icon={ <FaBasketballBall name='NBA' size='25' content={<Nba/>}/>  }/>
            <SideBarIcon dataSet={dataSet} icon={ <FaSnowboarding name='Snow Sports' size='20' content={<Snowsports/>}/> } />
            <Divider />
            <SideBarIcon dataSet={dataSet} icon={ <BsPlusLg name='Add a server' size='20' /> } />
            <SideBarIcon dataSet={dataSet} icon={ <FaGithub name='Github' size='25' /> } />
        </div>
    );
};

const SideBarIcon = ({ icon, dataSet }) => {
    const [popupDisplay, setPopupDisplay] = useState(false);

    const handleClick = () => {
        if (icon.props.name === 'Github') {
            window.open('https://github.com/bloo327/tailwind-dashboard')
        }

        dataSet({
            name: icon.props.name,
            display: icon.props.content
        })
    }

    //Add server modal
    return (icon.props.name === 'Add a server') ? (
        <>
            <button onClick={() => setPopupDisplay(true)} className='sidebar-icon group cursor-pointer' >
                { icon }

                <span class='sidebar-name group-hover:scale-100'>
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
                        <div className='popup.header'>
                            <button className='absolute top-4 right-4 text-black' onClick={() => setPopupDisplay(false)}><BsXLg size='20' /></button>
                            <Dialog.Title className='p-4 font-extrabold text-3xl text-center'>Create a Server!</Dialog.Title>
                            <Dialog.Description className='font-normal text-center text-lg'>What type of server would you like?</Dialog.Description>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    ) : (
        <button onClick={handleClick} className='sidebar-icon group cursor-pointer' >
            { icon }

            <span class='sidebar-name group-hover:scale-100'>
                { icon.props.name }
            </span>
        </button>
    )
}

const Divider = () => <hr className='sidebar-hr' />;


export default SideBar;