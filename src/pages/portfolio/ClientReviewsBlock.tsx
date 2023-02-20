import * as styles from '../../styles/pages/ClientReviewBlock.styles'
import { Typography } from '../../components/UIComponents'
// import {person1} from '@/assets/images'
import Review from '../../components/UIComponents/Cards/ReviewCards'
import { person1 } from '../../../public/images'

const Header = '<What Clients say about Me />'
const Description =
    'tony is an awesome programmer, I have worked with him on multiple projects/n and he is always on time and on budget'

const ClientReviewBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.AnimatedGradientText>{Header}</styles.AnimatedGradientText>
            <styles.ReviewSection>
                <Review
                    image={person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={Description}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection>
            <br />
            <styles.ReviewSection1>
                <Review
                    image={person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={Description}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection1>
            <styles.ReviewSection2>
                <Review
                    image={person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={Description}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection2>
            <styles.ReviewSection3>
                <Review
                    image={person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={Description}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection3>
        </styles.Container>
    )
}

export default ClientReviewBlock
