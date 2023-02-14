import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo } from '@/assets/images'
import { blockLogo } from '@/assets/icons'
const eduHeader = '< My Education />'

const MyEducationBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Section>
            <Typography variant="h1" sx={{ color: 'white' }}>
                {eduHeader}
            </Typography>
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
                    logoAlt='udemy'
                    buttonText="View Certificate"
                    onClick={() => console.log('View Certificate')}
                />
            </styles.Container>
        </styles.Section>
    )
}

export default MyEducationBlock
