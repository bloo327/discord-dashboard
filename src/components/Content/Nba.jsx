import Post from "./Post";
import NbaTracker from "./NbaTracker";

const Nba = () => {
    return (
        <Post name='Brendan' timestamp='just now' text={
                <div className='nba-wrap'>
                    <h1 className='text-2xl'>
                        Want to search up specific player stats for the latest NBA season? Try it out below! (play-in games included)
                        <p className='text-sm'>powered by the <a className='text-blue-300' target='_blank' rel="noreferrer" href="http://www.balldontlie.io/#introduction">Balldontlie API</a>. (free plan so latest nba season only) :(</p>
                        
                    </h1>
                    <NbaTracker />
                </div>
            }
        />
    )
}

export default Nba;