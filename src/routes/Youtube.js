import React from 'react'
import YouTube from 'react-youtube';
const Youtube1 = () => {
    return (
        <>
            <div className='youtube1'>
                <YouTube

                    videoId={'4CO98aFxRbA'}

                    opts={{
                        width: "1440",
                        height: "605",
                        playerVars: {
                            autoplay: 1,
                            rel: 0,
                            modestbranding: 1,
                        },
                    }}
                    onEnd={(e) => { e.target.stopVideo(0); }}
                />
            </div>
        </>
    )
}

export default Youtube1