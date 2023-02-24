import React from 'react'
import { Modal } from '@/components/UIComponents'
import useModal from '@/components/UIComponents/Modal/modalHook'
import ReactVideos from '@/components/ReactVideo'

interface Props {
    onClicks: boolean
    toggles: () => void
}

const VideoModal: React.FC<Props> = (props: Props): JSX.Element => {
    const { onClicks, toggles } = props

    return (
        <Modal isOpen={onClicks} toggle={toggles}>
            <div>
                <ReactVideos
                    src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="50vw"
                    height="50vh"
                    controls={true}
                    autoPlay={true}
                    muted={false}
                    
                />
            </div>
        </Modal>
    )
}

export default VideoModal
