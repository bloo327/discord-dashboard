import { BsFillCompassFill, BsPlusLg } from 'react-icons/bs'
import { FaHome, FaGithub, FaBasketballBall } from 'react-icons/fa' 

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col bg-primary text-white shadow-lg'>

            <SideBarIcon icon={ <FaHome name='Home' size='25' /> } />
            <Divider />
            <SideBarIcon icon={ <FaBasketballBall name='NBA' size='25' /> } />
            <SideBarIcon icon={ <FaGithub name='Github' size='25' /> } />
            <SideBarIcon icon={ <BsPlusLg name='Add a server' size='20' /> } />
            <SideBarIcon icon={ <BsFillCompassFill name='Explore Public Servers' size='20' /> } />

        </div>
    );
};

const SideBarIcon = ({ icon }) => {
    return (
        <div className='sidebar-icon group' >
            { icon }

            <span class='sidebar-name group-hover:scale-100'>
                { icon.props.name }
            </span>
        </div>
    )
}

const Divider = () => <hr className='sidebar-hr' />;


export default SideBar;