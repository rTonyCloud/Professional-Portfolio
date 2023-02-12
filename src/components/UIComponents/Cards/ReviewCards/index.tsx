import * as styles from './ReviewCards.styles'
import Typography from '../../Typography'
import Image from 'next/image'
import { stars } from '@/assets/icons'

interface ReviewCardsProps {
    imageSRC: string
    name: string
    company: string
    description: string
}

const Review: React.FC<ReviewCardsProps> = (props: ReviewCardsProps): JSX.Element => {
    const { imageSRC, name, company, description } = props

    return (
        <styles.Container>
            <styles.Wrapper>
                <Image
                    src={imageSRC}
                    alt="client-images"
                    height={50}
                    width={50}
                />
                <styles.Title>
                    <Typography variant="body1">{name}</Typography>
                </styles.Title>
                <styles.Company>
                    <Typography variant="body2">{company}</Typography>
                </styles.Company>
            <styles.Description>
                <Typography variant="body2">{description}</Typography>
            </styles.Description>
            <styles.Stars>
                {Array.from({ length: 5 }).map((_, i) => (
                    <styles.Image key={i}>
                        <Image src={stars} width={20} height={20} alt="stars" />
                    </styles.Image>
                ))}
            </styles.Stars>
                </styles.Wrapper>
        </styles.Container>
    )
}

export default Review
