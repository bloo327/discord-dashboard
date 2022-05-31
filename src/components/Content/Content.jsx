import { useState, useEffect } from 'react'

const Content = ({ display }) => {

    return (
        <div className='bg-red-600 h-full w-10/12'>
            <h1>Current Content:
                {display.display}
            </h1>
        </div>
    )
}

export default Content