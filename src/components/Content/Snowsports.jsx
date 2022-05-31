const SnowSports = () => {
    return (
        <div className='snow-wrap'>
            <h1 className='text-3xl text-blue-300'>
                Here's some of my favorite skiing/snowboarding clips and videos!
            </h1>
            <div className='clip-wrap'>
                <p className='text-xl'>
                    Henrik Harlaut - Griselda Flip
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8d1Ba01ba3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='clip-wrap'>
                <p className='text-xl'>
                    Candide Thovex - Pretty Tight
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p-mZTR1glq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='clip-wrap'>
                <p className='text-xl'>
                    Zeb Powell - XGames Aspen 2020 Knuckle Huck
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6QX-mRBgr_U?start=116" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default SnowSports