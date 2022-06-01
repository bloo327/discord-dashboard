const Post = ({ name, timestamp, text }) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo']
    const colorseed = Math.round(Math.random() * 7)
    const seed = Math.round(Math.random() * 100);
    return (
      <div className={'post'}>
        <div className='avatar-wrapper'>
          <img style={{backgroundColor: colors[colorseed]}} src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
        </div>
        <div className='post-content'>
          <p className='post-owner'>
            {name}
            <small className='timestamp'>{timestamp}</small>
          </p>
          <p className='post-text'>{text}</p>
        </div>
      </div>
    );
};

export default Post