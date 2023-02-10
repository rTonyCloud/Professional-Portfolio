import Image from 'next/image'
import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/RtonyBlock.styles'

import { profileCircleIcon, nodejsProfileIcon, reactProfileIcon, typescriptIcon, typescriptProfileIcon} from '@/assets/icons'
import { tonyrivera } from '@/assets/images'
const header = 'Hello, I am'
const name = '< rTonyCloud />'
const title = 'Software Developer'

const RtonyBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <styles.HeaderWrapper>
                <styles.FirstSectionHeader>
                    <Typography variant='h3' sx={{marginBottom: '-10px'}}>{header}</Typography>
                    <Typography variant="h1">{name}</Typography>
                </styles.FirstSectionHeader>
            </styles.HeaderWrapper>
            <styles.ProfileWrapper>
                <styles.ProfileCircle>
                    <Image src={profileCircleIcon} alt="profile" width={582} height={582} />
                </styles.ProfileCircle>
                <styles.ProfileImage>
                    <Image src={tonyrivera} alt="profile" width={500} height={500} />
                </styles.ProfileImage>
                <styles.ProfileIcons>

                    <styles.NodejsIcon>
                    <Image src={nodejsProfileIcon} alt="profile" width={100} height={100} />
                    </styles.NodejsIcon>
                    <styles.ReactIcon>
                    <Image src={reactProfileIcon} alt="profile" width={100} height={100} />
                    </styles.ReactIcon>
                    <styles.TypescriptIcon>
                    <Image src={typescriptProfileIcon} alt="profile" width={100} height={100} />
                    </styles.TypescriptIcon>
                </styles.ProfileIcons>
            </styles.ProfileWrapper>
            <styles.SecondSectionHeader>
                <styles.FirstSectionTitle>
                    <Typography variant="h2">{title}</Typography>
                </styles.FirstSectionTitle>
                <styles.DescriptionWrapper>
                    <styles.YearsOfExperience>
                    <Typography variant="h3">2+</Typography>
                    <Typography variant="body1" sx={{ marginTop: '65px' }}>
                        years of <br />
                        experience
                    </Typography>
                    </styles.YearsOfExperience>
                    <styles.ProjectsCompleted>
                    <Typography variant="h3">5</Typography>
                    <Typography variant="body1" sx={{ marginTop: '65px' }}>
                        projects completed <br /> around the world
                    </Typography>
                    </styles.ProjectsCompleted>
                </styles.DescriptionWrapper>
            </styles.SecondSectionHeader>
        </styles.Container>
    )
}

export default RtonyBlock
