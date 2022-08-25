import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaPlus } from 'react-icons/fa';

const textchannels = ['welcome', 'general']
const voicechannels = ['league', 'valorant', 'csgo', 'chill']

const ChannelBar = ({ name }) => {
    return (
        <div className='channelbar'>
            <div className='server-wrap'>
                <h1 className='server-name'>{name}</h1>
            </div>
            <div className='channel-list p-5'>
                <Dropdown header='TEXT CHANNELS' options={textchannels} />
                <Dropdown header='VOICE CHANNELS' options={voicechannels} />
            </div>
        </div>
    )
}

const Dropdown = ({ header, options }) => {
    const [expanded, setExpanded] = useState(true)
    
    return (
        <div className='dropdown mb-5'>
            <div className='drop-header' onClick={() => setExpanded(!expanded)}>
                <FaChevronDown className={
                    expanded ? 'transition-all ease-out text-accent text-opacity-80 my-auto mr-1' 
                    : 'transition-all ease-in -rotate-90 text-accent text-opacity-80 my-auto mr-1' 
                    } 
                />
                    <h5 className={expanded ? 'drop-header-selected' : 'drop-header-text'}>
                        {header}
                    </h5>
                    {(expanded === false) ? <FaPlus size='12' className='text-accent my-auto ml-auto transition-all opacity-100' /> : <FaPlus size='12' className='transition-all opacity-0 text-accent my-auto ml-auto' />} 
            </div>
            <ul>
            {expanded &&
            options &&
            options.map((selection) => <li key={selection}><TopicSelection selection={selection} /></li>)}
            </ul>
        </div>
    )
}

const TopicSelection = ({ selection }) => (
    <div className='drop-selection'>
      <BsHash size='24' className='text-gray-500' />
      <ul className='drop-selection-text my-1'>{selection}</ul>
    </div>
  );

  

export default ChannelBar