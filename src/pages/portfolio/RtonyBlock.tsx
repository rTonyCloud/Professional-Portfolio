import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/RtonyBlock.styles'

import { profileCircleIcon } from '@/assets/icons'
import Image from 'next/image'

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
                <styles.ProfileImage>
                    <Image src={profileCircleIcon} alt="profile" width={582} height={582} />
                </styles.ProfileImage>
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
