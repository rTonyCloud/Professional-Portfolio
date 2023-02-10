import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/AboutMeBlock.styles'

const AboutMeBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>About Me</Typography>
        </styles.Container>
    )
}



export default AboutMeBlock
