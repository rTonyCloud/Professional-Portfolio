import * as styles from './ReviewCards.styles'
import Typography, { Variant } from '../../Typography'
import Image, { StaticImageData } from 'next/image'
import { stars } from '@/assets/icons'

interface ReviewCardsProps {
    image: StaticImageData
    name: string
    company: string
    description: string
    width: number
    height: number
    alt: string
    variant?: Variant | undefined
}

const ReviewCard: React.FC<ReviewCardsProps> = (
    props: ReviewCardsProps
): JSX.Element => {
    const { image, name, company, description, width, height, alt, variant } = props

    return (
        <styles.Container>
            <styles.Wrapper>
                <Image src={image} alt={alt} height={height} width={width} />
                <styles.Title>
                    <Typography variant={variant}>{name}</Typography>
                </styles.Title>
                <styles.Company>
                    <Typography variant={variant}>{company}</Typography>
                </styles.Company>
                <styles.Description>
                    <Typography variant={variant}>{description}</Typography>
                </styles.Description>
                <styles.Stars>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <styles.Image key={i}>
                            <Image
                                src={stars}
                                width={width}
                                height={height}
                                alt={alt}
                            />
                        </styles.Image>
                    ))}
                </styles.Stars>
            </styles.Wrapper>
        </styles.Container>
    )
}

export default ReviewCard
