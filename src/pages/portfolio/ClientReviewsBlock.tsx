import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/ClientReviewBlock.styles'


const ClientReviewBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>Client Review</Typography>
        </styles.Container>
    )
}


export default ClientReviewBlock