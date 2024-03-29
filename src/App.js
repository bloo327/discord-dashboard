import SideBar  from './components/Sidebar/SideBar';
import ChannelBar from './components/ChannelBar/ChannelBar';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { useState } from 'react';
import Home from './components/Content/Home';

function App() { 
  const [data, setData] = useState({
    name: 'Home',
    display: <Home />
  })

  return (
    <div className='wrapper m-auto'>
      <div className="flex">
        <SideBar dataSetter={setData}/>
        <ChannelBar name={data.name}/>
        <ContentContainer alertSetter={setData} content={data}/>
      </div>
    </div>
  );
}

export default App;
