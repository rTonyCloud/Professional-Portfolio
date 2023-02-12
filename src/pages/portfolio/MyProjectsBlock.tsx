import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyProjectsBlock.styles'

const projectHeader = '< My Projects />'


const MyProjectsBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>{projectHeader}</Typography>
        </styles.Container>
    )
}



export default MyProjectsBlock