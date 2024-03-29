import Post from "./Post";
import NbaTracker from "./NbaTracker";

const Nba = () => {
    return (
        <Post name='Brendan' timestamp='just now' text={
                <div className='nba-wrap'>
                    <h1 className='text-2xl'>
                        Want to search up specific player stats? Try it out below!
                        <p className='text-sm'>powered by the <a className='text-blue-300' target='_blank' rel="noreferrer" href="http://www.balldontlie.io/#introduction">Balldontlie API</a></p>
                    </h1>
                    <NbaTracker />
                </div>
            }
        />
    )
}

export default Nba;