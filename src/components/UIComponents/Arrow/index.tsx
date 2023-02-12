import Image from 'next/image'
import * as styles from './Arrow.styles'

interface Props {
    size: number
    thickness: number
    onClick?: () => void
}

const Arrow: React.FC<Props> = (props: Props): JSX.Element => {
    const { onClick, size } = props

    Arrow.defaultProps = {
        size: 1,
        thickness: 1,
    }

    const styles: React.CSSProperties = {
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'relative',
        cursor: 'pointer',
    }

    const arrowStyles: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
    }

    return (
        <div style={styles} onClick={onClick}>
            {/* <div style={arrowStyles}><Image src={icon} alt='' width='20' height='20'/></div> */}
        </div>
    )
}

export default Arrow
