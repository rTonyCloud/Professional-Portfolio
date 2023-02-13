import Image, { StaticImageData } from 'next/image'
import * as styles from './EduCards.styles'
import Typography, { Variant } from '../../Typography'

interface EduCardsProps {
    image: StaticImageData
    width: number
    height: number
    alt: string
    title: string
    company: string
    issueDate: string
    credentialId: string
    logo: StaticImageData
    onClick?: () => void
    buttonText: string
    sx?: React.CSSProperties
    variant?: Variant 
}

const EduCards: React.FC<EduCardsProps> = (
    props: EduCardsProps
): JSX.Element => {
    const {
        alt,
        image,
        height,
        width,
        title,
        company,
        issueDate,
        credentialId,
        logo,
        buttonText,
        onClick,
        sx,
        variant,
    } = props
    return (
        <styles.Card>
            <styles.CardImage>
                <Image src={image} width={width} height={height} alt={alt} />
            </styles.CardImage>
            <styles.CardBody>
                <Typography variant={variant} sx={sx}>{title}</Typography>
                <styles.CardBodyRightWrapper>
                    <Image src={logo} width={width} height={height} alt={alt} />
                    <Typography variant={variant}>{company}</Typography>
                    <Typography variant={variant}>{issueDate}</Typography>
                    <Typography variant={variant}>{credentialId}</Typography>
                </styles.CardBodyRightWrapper>
                <styles.Button onClick={onClick}>
                    <Typography variant={variant}>{buttonText}</Typography>
                </styles.Button>
            </styles.CardBody>
        </styles.Card>
    )
}

export default EduCards
