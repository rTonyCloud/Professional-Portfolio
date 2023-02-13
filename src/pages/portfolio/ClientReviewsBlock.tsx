import * as styles from '@/styles/pages/ClientReviewBlock.styles'
import { Typography } from '@/components/UIComponents'
// import {person1} from '@/assets/images'
import Review from '@/components/UIComponents/Cards/ReviewCards'
import { Person1 } from '@/assets/images'

const Header = '< What Clients say about Me />'
const Description =
    'tony is an awesome programmer, I have worked with him on multiple projects/n and he is always on time and on budget'

const ClientReviewBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant="h1" sx={{ color: 'white' }}>
                {Header}
            </Typography>
            <styles.ReviewSection>
                <Review
                    imageSRC={Person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={Description}
                    width={0}
                    height={0}
                    alt={'person1'}
                />
            </styles.ReviewSection>
        </styles.Container>
    )
}

export default ClientReviewBlock
