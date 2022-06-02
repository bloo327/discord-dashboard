const Home = () => {
    return (
        <div className='home-wrap'>
            <h1 className='text-3xl text-gray-300 dark:text-gray-700 transition duration-300 ease-in-out'>
                Welcome to my Discord Dashboard!
            </h1>
            <h1 className='text-xl flex flex-col dark:text-gray-700 transition duration-300 ease-in-out'>
                <p className="font-bold">What I'm currently working on:</p>
                - finishing this section <br /> 
                - connecting state to channelbar <br />
                - adding add server functionality <br />
            </h1>
        </div>
    )
}

export default Home