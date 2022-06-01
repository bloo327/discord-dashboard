import { BsPlusCircleFill } from 'react-icons/bs';
import Content from '../Content/Content'
import TopNavBar from '../TopNavBar/TopNavBar';

const ContentContainer = ( {content} ) => {
    
    return (
        <>
            <TopNavBar />
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
      <input type='text' placeholder='Any thoughts? Try typing them here!' className='bottom-bar-input' />
    </div>
  );
  
const PlusIcon = () => (
    <BsPlusCircleFill
        size='22'
        className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
    );  

export default ContentContainer