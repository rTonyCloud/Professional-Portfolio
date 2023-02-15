import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo } from '@/assets/images'
import { blockLogo } from '@/assets/icons'
import Toggle from '@/components/UIComponents/Toggle'
const eduHeader = '< My Education />'

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
                    image={cardLogo}
                    width={0}
                    height={0}
                    imgAlt="udemy"
                    title="The Complete 2021 Web Development Bootcamp"
                    company="Udemy"
                    logo={blockLogo}
                    issueDate="2021"
                    credentialId="Credential ID: 123456789"
                    logoAlt="udemy"
                    buttonText="View Certificate"
                    onClick={() => console.log('View Certificate')}
                />
            </styles.Container>
        </styles.Section>
    )
}

export default MyEducationBlock
