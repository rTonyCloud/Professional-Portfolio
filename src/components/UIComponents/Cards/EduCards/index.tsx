import Image, { StaticImageData } from 'next/image'
import * as styles from './EduCards.styles'
import Typography, { Variant } from '../../Typography'



interface EduCardsProps {
    image: StaticImageData
    width: number
    height: number
    imgAlt: string
    logoAlt: string
    title: string
    company: string
    issueDate: string
    credentialId: string
    logo: StaticImageData
    onClick?: () => void
    buttonText: string
    sx?: React.CSSProperties | undefined
    variant?: Variant | undefined
}

const EduCards: React.FC<EduCardsProps> = (
    props: EduCardsProps
): JSX.Element => {
    const {
        imgAlt,
        logoAlt,
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
                <Image
                    src={image}
                    width={width}
                    height={height}
                    alt={imgAlt}
                    className="image"
                />
            </styles.CardImage>
            <styles.CardBody>
                <Typography variant={variant} sx={sx}>
                    {title}
                </Typography>
                <styles.CardBodyContent>
                    <styles.CardBodyRightWrapper>
                        <Image
                            src={logo}
                            width={width}
                            height={height}
                            alt={logoAlt}
                            className="image"
                        />
                        <Typography
                            variant={variant}
                            sx={{
                                position: 'relative',
                                left: '10px',
                                top: '-10px',
                                fontSize: '18px',
                                fontFamily: 'Inter',
                                fontWeight: '600',
                            }}
                        >
                            {company}
                        </Typography>
                        <Typography
                            variant={variant}
                            sx={{
                                position: 'absolute',
                                bottom: '100px',
                                left: '55px',
                                fontSize: '14px',
                                fontFamily: 'Inter',
                                fontWeight: '400',
                            }}
                        >
                            {issueDate}
                        </Typography>
                        <Typography
                            variant={variant}
                            sx={{
                                position: 'absolute',
                                bottom: '85px',
                                left: '55px',
                                fontSize: '14px',
                                fontFamily: 'Inter',
                                fontWeight: '400',
                            }}
                        >
                            {credentialId}
                            {'\n'}
                        </Typography>
                    </styles.CardBodyRightWrapper>
                    <styles.Button onClick={onClick}>
                        <Typography variant={variant}>{buttonText}</Typography>
                    </styles.Button>
                </styles.CardBodyContent>
            </styles.CardBody>
        </styles.Card>
    )
}

export default EduCards
