import { BsPlusCircleFill } from 'react-icons/bs';
import TopNavBar from '../TopNavBar/TopNavBar';
import Content from '../Content/Content'


const ContentContainer = ( {content} ) => {
    
    return (
        <>
            <div className='contentcontainer text-white'>
                <Content display={content}/>
                <BottomBar />
            </div>
        </>
    )
}

const BottomBar = () => (
    <div className='bottom-bar'>
      <PlusIcon />
      <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
    </div>
  );
  
const PlusIcon = () => (
    <BsPlusCircleFill
        size='22'
        className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
    );  

export default ContentContainer