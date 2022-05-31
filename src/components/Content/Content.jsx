import { useState, useEffect } from 'react'

const Content = ({ display }) => {

    return (
        <div className='border h-max w-10/12 mb-20'>
            <h1>Current Content:
                {display.display}
            </h1>
        </div>
    )
}

export default Content