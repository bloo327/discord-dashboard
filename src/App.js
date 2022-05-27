import SideBar  from './components/Sidebar/SideBar'
import ChannelBar from './components/ChannelBar/ChannelBar'
import ContentContainer from './components/ContentContainer/ContentContainer';

function App() {
  return (
    <div className='wrapper m-auto'>
      <div className="flex">
        <SideBar />
        <ChannelBar />
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
