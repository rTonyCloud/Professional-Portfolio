import React from 'react';
import {Modal} from '@/components/UIComponents'
import useModal from '@/components/UIComponents/Modal/modalHook'

interface Props {
    onClicks: boolean
    toggles: () => void
}

const VideoModal: React.FC<Props> = (props: Props): JSX.Element => {
    const {onClicks, toggles} = props

    return (

        <Modal isOpen={onClicks} toggle={toggles}>
                <div>
                    hello world
                </div>
        </Modal>
    )
}


export default VideoModal