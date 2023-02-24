import React from 'react'
import * as styles from './VideoModal.styles'
import Image from 'next/image'
import VimeoPlayer from 'react-player/vimeo'
import { jciTab, salsaCongressTab, sensualMovementTab } from 'public/images'

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
                <styles.VideoSelector>
                        <Image src={salsaCongressTab} alt="salsaCongressTab" width={150} height={150} className='Osc-image'/>
                        <Image src={sensualMovementTab} alt="salsaCongressTab" width={150} height={150} className='Sm-image'/>
                        <Image src={jciTab} alt="salsaCongressTab" width={150} height={150} className='Jci-image'/>
                </styles.VideoSelector>
            </styles.Container>
    )
}

export default VideoModal
