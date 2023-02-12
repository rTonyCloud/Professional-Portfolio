import * as styles from '@/styles/pages/ClientReviewBlock.styles'
import { Typography } from '@/components/UIComponents'
// import {person1} from '@/assets/images'
import Review from '@/components/UIComponents/Cards/ReviewCards'
import { person1 } from '@/assets/images'

const Header = '< What Clients say about Working with Me />'
const description =
    'tony is an awesome programmer, I have worked with him on multiple projects/n and he is always on time and on budget'

const ClientReviewBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant="h1" sx={{ color: 'white' }}>
                {Header}
            </Typography>
            <styles.ReviewSection>
                <Review
                    imageSRC={person1}
                    name="Tony Rivera"
                    company="CEO of Riveras"
                    description={description}
                />
            </styles.ReviewSection>
        </styles.Container>
    )
}

export default ClientReviewBlock
