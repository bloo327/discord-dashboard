import Post from "./Post"

const Github = () => {
    return (
        <Post name='Brendan' timestamp='just now' text={
                <div className='github-wrap'>
                    <h1 className='text-2xl'>
                        Thanks for visiting the repo!
                        <p className='text-xl'>Feel free to leave any suggestions/open up issues and/or pull requests!</p>
                    </h1>
                    <div className='pt-5'>
                    <a className='text-xl text-blue-300' href='https://github.com/bloo327/tailwind-dashboard'>Link to repository here</a>
                    </div>
                </div>
            }
        />
    )
}

export default Github