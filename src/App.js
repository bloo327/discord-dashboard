import SideBar  from './components/Sidebar/SideBar';
import ChannelBar from './components/ChannelBar/ChannelBar';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { useState, useEffect } from 'react';
import TopNavBar from './components/TopNavBar/TopNavBar';
import Home from './components/Content/Home';

function App() { 

  const [data, setData] = useState({
    name: 'Home',
    display: <Home />,
  })

  return (
    <div className='wrapper m-auto'>
      <div className="flex">
        <SideBar dataSet={setData}/>
        <ChannelBar />
        <TopNavBar />
        <ContentContainer content={data}/>
      </div>
    </div>
  );
}

export default App;
