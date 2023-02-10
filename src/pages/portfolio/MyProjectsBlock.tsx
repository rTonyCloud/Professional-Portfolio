import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyProjectsBlock.styles'

const MyProjectsBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>My Project</Typography>
        </styles.Container>
    )
}



export default MyProjectsBlock