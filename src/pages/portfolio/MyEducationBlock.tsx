import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'


const eduHeader = '< My Education />'

const MyEducationBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>{eduHeader}</Typography>
        </styles.Container>
    )
}



export default MyEducationBlock
