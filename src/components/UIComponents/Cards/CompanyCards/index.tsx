import { Button, Typography } from '../..'
import { Variant } from '../../Typography'
import * as styles from './CompanyCards.styles'
import Image, { StaticImageData } from 'next/image'
import { ButtonProps } from '../../Buttons'
interface CompanyCardsProps {
    companyLogo: StaticImageData
    company: string
    description: string
    onClick: () => void
    width: number | undefined
    height: number | undefined
    alt: string
    sx?: React.CSSProperties | undefined
    variant?: Variant | undefined
    variantButton?: ButtonProps['variant'] | undefined
}

const buttonName = 'Visit Website'

const CompanyCards: React.FC<CompanyCardsProps> = (
    props: CompanyCardsProps
): JSX.Element => {
    const {
        companyLogo,
        company,
        description,
        height,
        width,
        alt,
        onClick,
        variant,
        variantButton,
    } = props
    return (
        <styles.Card>
            <styles.Wrapper>
                <styles.Image>
                    <Image
                        src={companyLogo}
                        alt={alt}
                        width={width}
                        height={height}
                        className='image'
                    />
                </styles.Image>
                <styles.Title>
                    <Typography variant={variant}>{company}</Typography>
                </styles.Title>
                <styles.Description>
                    <Typography variant={variant}>{description}</Typography>
                </styles.Description>
                <styles.Button>
                    <Button variant={variantButton} onClick={onClick}>
                        {buttonName}
                    </Button>
                </styles.Button>
            </styles.Wrapper>
        </styles.Card>
    )
}
export default CompanyCards
