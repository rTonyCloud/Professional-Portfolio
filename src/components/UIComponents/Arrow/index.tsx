import Image from 'next/image'
import * as styles from './Arrow.styles'

interface Props {
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

    return (
        <div style={styles} onClick={onClick}>
            {/* <div style={arrowStyles}><Image src={icon} alt={alt} width={width} height={height}/></div> */}
        </div>
    )
}

export default Arrow
