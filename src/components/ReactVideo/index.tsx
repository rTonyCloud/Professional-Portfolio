import React from 'react'
import ReactPlayer from 'react-player'

interface ReactVideoProps {
    src: string
    width: string
    height: string
    controls: boolean
    autoPlay: boolean
    muted: boolean
}
const ReactVideoPlayer: React.FC<ReactVideoProps> = (props: ReactVideoProps): JSX.Element  => {
    const { src, width, height, controls, autoPlay, muted } = props
    
    return (
    <ReactPlayer
        src={src}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
    />
    )

}

export default ReactVideoPlayer