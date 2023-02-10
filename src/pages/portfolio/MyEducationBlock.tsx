import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'

const MyEducationBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>my education</Typography>
        </styles.Container>
    )
}



export default MyEducationBlock
