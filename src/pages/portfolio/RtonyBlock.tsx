import * as styles from '@/styles/pages/RtonyBlock.styles'
import Image from 'next/image'
import { Typography } from '@/components/UIComponents'
import {
    profileCircleIcon,
    nodejsProfileIcon,
    reactProfileIcon,
    typescriptProfileIcon,
} from 'public/icons'
import { tonyRivera } from 'public/images'
import RtonyPageTexts from '@/utils/portfolioTexts/Rtony.texts'
// import stylesGuide from '@/styles/components/components.styles'

const { Title, JobTitle, Experience, Projects } = RtonyPageTexts()
// const { rtonytextStyle, RtonyExperienceStyle, RtonyYearsStyle } = stylesGuide()

// const style = {
//     background:
//         'linear-gradient(92.61deg, rgba(0, 194, 255, 0.85) 7.28%, rgba(255, 117, 244, 0.799) 91.4%)',
// }

const RtonyBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.HeaderWrapper>
                <styles.FirstSectionHeader>
                    <Typography variant="h3" sx={{ marginBottom: '-20px' }}>
                        {Title.Into}
                    </Typography>
                    <styles.AnimatedGradientText>
                        {Title.Header}
                    </styles.AnimatedGradientText>
                </styles.FirstSectionHeader>
            </styles.HeaderWrapper>
            <styles.ProfileWrapper>
                <styles.ProfileCircle>
                    <Image
                        src={profileCircleIcon}
                        alt="profile"
                        width={582}
                        height={582}
                        className='profile-circle'
                    />
                </styles.ProfileCircle>
                <styles.ProfileImage>
                    <Image
                        src={tonyRivera}
                        alt="profile"
                        width={500}
                        height={500}
                    />
                </styles.ProfileImage>
                <styles.ProfileIcons>
                    <styles.NodejsIcon>
                        <Image
                            src={nodejsProfileIcon}
                            alt="profile"
                            width={100}
                            height={100}
                        />
                    </styles.NodejsIcon>
                    <styles.ReactIcon>
                        <Image
                            src={reactProfileIcon}
                            alt="profile"
                            width={100}
                            height={100}
                        />
                    </styles.ReactIcon>
                    <styles.TypescriptIcon>
                        <Image
                            src={typescriptProfileIcon}
                            alt="profile"
                            width={100}
                            height={100}
                        />
                    </styles.TypescriptIcon>
                </styles.ProfileIcons>
            </styles.ProfileWrapper>
            <styles.SecondSectionHeader>
                <styles.FirstSectionTitle>
                    <Typography variant="h2">{JobTitle}</Typography>
                </styles.FirstSectionTitle>
                <styles.DescriptionWrapper>
                    <styles.YearsOfExperience>
                        <Typography variant="h2" sx={{ color: '#828282' }}>
                            {Experience.Years}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: '2.8em',
                                whiteSpace: 'pre-line',
                                color: '#828282',
                            }}
                        >
                            {Experience.Title}
                        </Typography>
                    </styles.YearsOfExperience>
                    <styles.ProjectsCompleted>
                        <Typography variant="h2" sx={{ color: '#828282' }}>
                            {Projects.Projects}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: '2.8em',
                                whiteSpace: 'pre-line',
                                color: '#828282',
                            }}
                        >
                            {Projects.title}
                        </Typography>
                    </styles.ProjectsCompleted>
                </styles.DescriptionWrapper>
            </styles.SecondSectionHeader>
        </styles.Container>
    )
}

export default RtonyBlock
