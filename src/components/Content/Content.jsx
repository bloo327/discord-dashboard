const Content = ({ display }) => {

    return display.name !== 'Home' ? (
        <>
            <div className='content-header'>
                <div className='header-welcome'>
                    Welcome to
                    <p>{display.name}</p>
                </div>
                <p className='text-sm'>This is the beginning of this server.</p>
            </div>
            <div className='h-max w-10/12 mb-20'>
                {display.display}
            </div>
        </>
    ) : <div className='h-max w-10/12 mb-20'>
            {display.display}
        </div>
}

export default Content