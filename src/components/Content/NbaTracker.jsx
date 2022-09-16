import { useState, } from 'react';
import axios from "axios";

const seasons = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979]

const NbaTracker = () => {
    const [player, setPlayer] = useState({
        playerName: '',
    })

    const [result, setResult] = useState({
        resultName: '',
    })

    const [stats, setStats] = useState({
        playerStats: undefined
    })

    const [season, setSeason] = useState({
        season: 2021
    })

    const getPlayerId = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${player.playerName}`)
        .then(async resp => {
            if (resp.data.data[0] === undefined) {
                alert(`This player doesn't exist or hasn't played in the selected season`)
            } else if (resp.data.data.length > 1) {
                alert('Please be more specific!')
            } else {
                let id = resp.data.data[0].id
                getPlayerAverages(id)
                setResult({
                    resultName: `${resp.data.data[0].first_name} ${resp.data.data[0].last_name}`
                })
            }
        }).catch(error => {
            console.log(error)
        });
    }

    const getPlayerAverages = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${season.season}&player_ids[]=${playerId}`)
        .then(async resp => {
            if (resp.data.data.length > 0) {
                setStats({
                    playerStats: resp.data.data[0]
                });
            } else {
                setStats({
                    playerStats: undefined
                })
                alert('No stats found for this player in this season!')
            }
        }).catch(error => {
            alert('Error getting averages, make sure season is selected!')
            console.log(error)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayer({
            playerName: ''
        });
        getPlayerId();
    }

    const handleChange = (e) => {
        setPlayer({
            playerName: e.target.value
        });
    }

    const handleSeasonChange = (e) => {
        setSeason({
            season: e.target.value
        });
    }

    const Results = () => {
        return (
            <div className='flex flex-wrap justify-center'>
                <h1 className='pr-3 pt-2'>Name: <p className='font-bold'>{result.resultName}</p></h1>
                <h1 className='pr-3 pt-2'>Games Played <p className='font-bold'>{stats.playerStats.games_played}</p></h1>
                <h1 className='pr-4 pt-2'>FG% <p className='font-bold'>{Math.floor(stats.playerStats.fg_pct * 100)}%</p></h1>
                <h1 className='pr-4 pt-2'>FT% <p className='font-bold'>{Math.floor(stats.playerStats.ft_pct * 100)}%</p></h1>
                <h1 className='pr-3 pt-2'>Points <p className='font-bold'>{stats.playerStats.pts}</p></h1>
                <h1 className='pr-3 pt-2'>Rebounds <p className='font-bold'>{stats.playerStats.reb}</p></h1>
                <h1 className='pr-3 pt-2'>Assists <p className='font-bold'>{stats.playerStats.ast}</p></h1>
                <h1 className='pr-3 pt-2'>Steals <p className='font-bold'>{stats.playerStats.stl}</p></h1>
                <h1 className='pr-3 pt-2'>Blocks <p className='font-bold'>{stats.playerStats.blk}</p></h1>
                <h1 className='pr-3 pt-2'>Turnovers <p className='font-bold'>{stats.playerStats.turnover}</p></h1>
            </div>
        );
    }

    return (
        <div className='nbadisplay text-center'>
            <h1 className='text-lg font-bold'>Try it here!</h1>
            <div>
                <label>Select a season:
                    <select className='rounded-md m-4 p-2' value={season.season} onChange={handleSeasonChange}>
                        {seasons.map(i => <option key={i}>{i}</option>)}
                    </select>
                </label>
            </div>
            <form onSubmit={handleSubmit}>  
            <input className='nbasearch' type='text' value={player.playerName} onChange={handleChange} placeholder='Search player name'/>
            <input className='text-black p-2 rounded-md bg-stone-200' type='submit' value='Submit' />
            </form>
            {stats.playerStats ? <Results /> : ''}
        </div>
    )
}

export default NbaTracker;