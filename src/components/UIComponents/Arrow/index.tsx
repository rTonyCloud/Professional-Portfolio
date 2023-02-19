import Image from 'next/image'
import * as styles from './Arrow.styles'

interface Props {
    icon: string
    width: number
    height: number
    alt: string
    onClick?: () => void
}

const Arrow: React.FC<Props> = (props: Props): JSX.Element => {
    const { onClick, height, width, alt} = props


    const styles: React.CSSProperties = {
        width: width,
        height: height,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'relative',
        cursor: 'pointer',
    }

    const arrowStyles: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
    }

    const rightArrowIcon = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(0,-50%)',
        right: '32',
        fontSize: '45px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
    }
    

    return (
        <div style={styles} onClick={onClick}>
            <div style={arrowStyles}> </div>
        </div>
    )
}

export default Arrow
