import { BsPlusCircleFill } from 'react-icons/bs';
import Content from '../Content/Content';
import TopNavBar from '../TopNavBar/TopNavBar';

const ContentContainer = ({ alertSetter, content }) => {

    return (
        <>
            <TopNavBar setContent={alertSetter}/>
            <div className='contentcontainer text-white'>
                <Content display={content}/>
                <BottomBar cname={content} />
            </div>
        </>
    )
}

const BottomBar = ({ cname }) => (
    <div className='bottom-bar'>
      <PlusIcon />
      <input type='text' placeholder={`Message #${cname.name}`} className='bottom-bar-input' />
    </div>
  );
  
const PlusIcon = () => (
    <BsPlusCircleFill
        size='22'
        className='attach-icon'
    />
    );  

export default ContentContainer;