import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo, umLogo } from 'public/images'
import { blockLogo } from 'public/icons'
import Toggle from '@/components/UIComponents/Toggle'
const eduHeader = '<My Education />'

const MyEducationBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Section>
            <styles.Header>
                <styles.AnimatedGradientText>
                    {eduHeader}
                </styles.AnimatedGradientText>
                <Toggle
                    labels={['Education', 'Certifications']}
                    defaultLabel="Education"
                    onChange={(label) => console.log(label)}
                />
            </styles.Header>
            <styles.Container>
                <EduCards
                    image={umLogo}
                    width={0}
                    height={0}
                    sx={{fontSize: '36px', position: 'relative', lineHeight: '40px', top: '-40px'}}
                    imgAlt="udemy"
                    title="Full Stack Web Development"
                    company="University of Miami"
                    logo={blockLogo}
                    issueDate="Issue Dec, 2021"
                    credentialId="Credential ID: 123456789"
                    logoAlt="UM"
                    buttonText="View Certificate"
                    onClick={() => console.log('View Certificate')}
                />
            </styles.Container>
        </styles.Section>
    )
}

export default MyEducationBlock
