import Post from "./Post"

const ChatServer = () => {
    return (
        <div className='content-list'>
            <Post
            name='Brendan'
            timestamp='one week ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post name='Leon' timestamp='one week ago' text={`Aliquam ipsum dolor. `} />
            <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
            <Post
            name='Lucas'
            timestamp='4 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
            name='Chris'
            timestamp='4 days ago'
            text={`Donec quis enim a eros sodales consequat. Nunc ultricies, leo nec vulputate vehicula, 
            orci nunc euismod eros, eu auctor massa felis ut tortor. Mauris tincidunt mauris ligula, 
            non sodales justo efficitur luctus. 
            
            In vehicula ultricies hendrerit. Nam in orci a dolor finibus varius at vel ligula.`}
            />
            <Post
            name='Albert'
            timestamp='2 days ago'
            text={`Aliquam eget bibendum leo. Nulla bibendum et diam eu condimentum. 
            Aliquam vel nunc massa. Mauris consequat ante id ex tincidunt accumsan. 
            Nullam sed enim iaculis, scelerisque elit in, iaculis dui. `}
            />
            <Post
            name='Timothy'
            timestamp='22 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
            />
            <Post
            name='James'
            timestamp='3 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.`}
            />
            <Post
            name='Dalton'
            timestamp='Just now'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
            name='Nadnerb'
            timestamp='Just now'
            text={`Mauris vel est ac odio hendrerit pharetra eget sit amet purus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. `}
            />
            <Post
            name='Bloo'
            timestamp='Just now'
            text={`Praesent ullamcorper condimentum nunc. This is gibberish Phasellus tincidunt erat nec ante egestas 
            mollis at semper lectus. Cras convallis ante vel velit dignissim tincidunt. 
            In nec dolor consectetur velit fermentum blandit. `}
            />
        </div>    
    )
}

export default ChatServer