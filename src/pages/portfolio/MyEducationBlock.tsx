import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo, umLogo, wguLogo } from 'public/images'
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
                <styles.Card>
                    <EduCards
                        image={umLogo}
                        width={0}
                        height={0}
                        sx={{
                            fontSize: '36px',
                            position: 'relative',
                            lineHeight: '40px',
                            top: '-40px',
                        }}
                        imgAlt="um-university"
                        title="Full Stack Web Development"
                        company="University of Miami"
                        issueDate="Issue Date: Dec, 2021"
                        credentialId="Credential ID: 123456789"
                        buttonText="View Certificate"
                        onClick={() => console.log('View Certificate')}
                    />
                </styles.Card>
                <styles.Card>
                    <EduCards
                        image={wguLogo}
                        width={0}
                        height={0}
                        sx={{
                            fontSize: '36px',
                            position: 'relative',
                            lineHeight: '40px',
                            top: '-40px',
                        }}
                        imgAlt="wgu"
                        title="Computer Science B.S"
                        company="Western Governors University"
                        issueDate="Issue Date: InProgress(2024)"
                        credentialId="Credential ID: 123456789"
                        buttonText="View Degree"
                        onClick={() => console.log('View Certificate')}
                    />
                </styles.Card>
            </styles.Container>
        </styles.Section>
    )
}

export default MyEducationBlock
