import Post from "./Post"

const SnowSports = () => {
    return (
        <Post name='Brendan' timestamp='05/30/2022' text={
        <div className='snow-wrap flex flex-col'>
            <h1 className='text-3xl'>
                Here's some of my favorite skiing/snowboarding clips and videos!
            </h1>
            <div className='clip-wrap'>
                <p className='text-xl'>
                        Henrik Harlaut - Griselda Flip
                </p>
                <div className='iframeVideo'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8d1Ba01ba3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className='clip-wrap'>
                <p className='text-xl'>
                    Candide Thovex - Pretty Tight
                </p>
                <div className='iframeVideo'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p-mZTR1glq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className='clip-wrap'>
                <p className='text-xl'>
                        Zeb Powell - XGames Aspen 2020 Knuckle Huck
                </p>
                <div className='iframeVideo'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6QX-mRBgr_U?start=116" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>}
    />
    )
}

export default SnowSports