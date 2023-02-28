import * as styles from '@/styles/pages/ClientReviewBlock.styles'
import Review from '@/components/UIComponents/Cards/ReviewCards'
import {
    Header,
    MarcoReview,
    MiguelReview,
    RichReview,
    EricReview,
} from '@/utils/portfolioTexts/Reviews.texts'
import { userIcon } from 'public/icons'

const ClientReviewBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.AnimatedGradientText>{Header}</styles.AnimatedGradientText>
            <styles.ReviewSection>
                <Review
                    image={userIcon}
                    name="Marco Calo"
                    company="CEO - Spinner Network"
                    description={MarcoReview}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection>
            <styles.ReviewSection1>
                <Review
                    image={userIcon}
                    name="Miguel Palencia"
                    company="COO - Qtum"
                    description={MiguelReview}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection1>
            <styles.ReviewSection2>
                <Review
                    image={userIcon}
                    name="Rich Falcone"
                    company="CEO - Summit Media"
                    description={RichReview}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection2>
            <styles.ReviewSection3>
                <Review
                    image={userIcon}
                    name="Eric Manganaro"
                    company="CTO - Blockchain Center"
                    description={EricReview}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection3>
        </styles.Container>
    )
}

export default ClientReviewBlock
