import Post from "./Post"

const Home = () => {
    return (
        <Post name='Brendan' timestamp='06/02/2022' text={
            <div className='home-wrap'>
                <h1 className='home-header'>
                    Welcome to my Discord Dashboard!
                </h1>
                <h2 className='home-body'>
                    Features in progress: <br />
                    - finishing this section <br /> 
                    - connecting channelbar state <br />
                    - adding add server functionality <br />
                    - adding reactions
                </h2>
                <h3>
                    Not here from Github? <br />
                    Visit the repo from the sidebar!
                </h3>
            </div>
        }/>
    )
}

export default Home