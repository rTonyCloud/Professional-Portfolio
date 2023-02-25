import React from 'react'
import * as styles from './Modal.styles'

interface ModalProps {
    isOpen: boolean
    toggle: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
    const { isOpen, toggle, children } = props

    return (
        <>
            {isOpen ? (
                <styles.ModalOverlay onClick={toggle}>
                    <styles.ModalContent onClick={(e) => e.stopPropagation()}>
                        {children}
                    </styles.ModalContent>
                </styles.ModalOverlay>
            ) : null}
        </>
    )
}

export default Modal
