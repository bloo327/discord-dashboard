import React from "react"; 

//use to implement corresponding dates if user posts are ever implemented
let AlertDivider = () => {
    return (
        <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="flex-shrink mx-4 font-bold text-sm text-gray-500">Today</span>
            <div className="flex-grow border-t border-gray-500"></div>
        </div>
    )
}

export default AlertDivider