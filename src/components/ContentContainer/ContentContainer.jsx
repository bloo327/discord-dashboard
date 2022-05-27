import { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import TopNavBar from '../TopNavBar/TopNavBar';


const ContentContainer = () => {
    return (
        <>
        <TopNavBar />
            <div className='contentcontainer text-white'>
                <h1>I am Content Container</h1>
                <hr className='contentbar-hr' />
            </div>
        </>
    )
}

export default ContentContainer