import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/AboutMeBlock.styles'

const Aboutme = '< About me />'

const AboutMeBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.AboutText>
            <Typography variant='h1' sx={{ color: 'white' }}>{Aboutme}</Typography>
            <Typography variant='body1' sx={{color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.< br />
            Integer velit turpis, finibus eu condimentum ut, posuere at < br />
            ipsum. Maecenas vel consequat mauris. Quisque sodales < br />
            ipsum aliquet aliquam placerat. Proin varius condimentum < br />
            nisl, sit amet aliquet nisl. Sed euismod, nisl sit amet dgsyr < br />
            aliquam, nisl nisl aliquam nisl, sit amet aliquet nisl. Sed < br />
            </Typography>
            </styles.AboutText>
        </styles.Container>
    )
}



export default AboutMeBlock
