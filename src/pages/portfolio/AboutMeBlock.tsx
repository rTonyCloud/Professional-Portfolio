import * as styles from '@/styles/pages/AboutMeBlock.styles'
import AboutMeCard from '@/components/UIComponents/Cards/AboutMeCard/index'
import AboutTexts from '@/utils/portfolioTexts/About.texts'
import { Typography } from '@/components/UIComponents'
import { closeCodeIcon, dancingManIcon } from 'public/icons'

const { AboutMe, AboutMeText } = AboutTexts()

const AboutMeBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.Wrapper>
                <styles.AboutText>
                    <styles.AnimatedGradientText id='about'>
                        {AboutMe}
                    </styles.AnimatedGradientText>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        {AboutMeText()}
                    </Typography>
                </styles.AboutText>
                <styles.CardWrapper>
                    <AboutMeCard
                        title="Software Developer"
                        link="Hire Me"
                        image={closeCodeIcon}
                        alt="closeCodeIcon"
                        width={50}
                        height={50}
                        variantText="body1"
                        variantHeader="body2"
                        sxHeader={{ color: '#fff', fontSize: '24px' }}
                        sxBody={{
                            color: '#70FF00',
                            textDecoration: 'underline',
                        }}
                    />

                    <AboutMeCard
                        title="Professinal Dancer"
                        link="Watch Me"
                        image={dancingManIcon}
                        alt="dancingManIcon"
                        width={0}
                        height={0}
                        variantText="body1"
                        variantHeader="body2"
                        sxHeader={{ color: '#fff', fontSize: '24px' }}
                        sxBody={{
                            color: '#70FF00',
                            textDecoration: 'underline',
                        }}
                    />
                </styles.CardWrapper>
            </styles.Wrapper>
        </styles.Container>
    )
}

export default AboutMeBlock
