import React from 'react'
import * as styles from './VideoModal.styles'
import VimeoPlayer from 'react-player/vimeo'

interface Props {
    url: string
}

const VideoModal: React.FC<Props> = (props: Props): JSX.Element => {
    const { url } = props
    return (
        <styles.Container>
            <VimeoPlayer
                url={url}
                width="100%"
                height="50vh"
                controls={true}
                autoPlay={true}
                muted={false}
            />
        </styles.Container>
    )
}

export default VideoModal
