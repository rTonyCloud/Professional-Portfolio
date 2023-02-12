import * as styles from '@/styles/pages/AboutMeBlock.styles'
import { Typography } from '@/components/UIComponents'
import { closeCodeIcon, dancingManIcon } from '@/assets/icons'
import Image from 'next/image'
import AboutMeCard from '@/components/UIComponents/Cards/AboutMeCard/index'

const AboutMe = '< About Me />'

const AboutMeBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.AboutText>
                <Typography variant="h1" sx={{ color: 'white' }}>
                    {AboutMe}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Integer velit turpis, finibus eu condimentum ut, posuere at{' '}
                    <br />
                    ipsum. Maecenas vel consequat mauris. Quisque sodales <br />
                    ipsum aliquet aliquam placerat. Proin varius condimentum{' '}
                    <br />
                    nisl, sit amet aliquet nisl. Sed euismod, nisl sit amet
                    dgsyr <br />
                    aliquam, nisl nisl aliquam nisl, sit amet aliquet nisl. Sed{' '}
                    <br />
                </Typography>
            </styles.AboutText>
            <AboutMeCard
                title="Software Developer"
                link="Hire Me"
                image={
                    <Image
                        src={closeCodeIcon}
                        alt="closeCodeIcon"
                        width={75}
                        height={50}
                    />
                }
            />
            &n
            <AboutMeCard
                title="Professinal Dancer"
                link="Watch Me"
                image={
                    <Image
                        src={dancingManIcon}
                        alt="closeCodeIcon"
                        width={100}
                        height={100}
                    />
                }
            />
        </styles.Container>
    )
}

export default AboutMeBlock
