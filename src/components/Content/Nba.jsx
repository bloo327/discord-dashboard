import Post from "./Post"

const Nba = () => {
    return (
        <Post name='Brendan' timestamp='just now' text={
                <div className='nba-wrap'>
                    <h1 className='text-2xl'>
                        Want to search up specific player/team stats? Try it out below!
                        <p className='text-sm'>powered by the <a className='text-blue-300' target='_blank' href="http://www.balldontlie.io/#introduction">Balldontlie API</a></p>
                    </h1>
                </div>
            }
        />
    )
}

export default Nba