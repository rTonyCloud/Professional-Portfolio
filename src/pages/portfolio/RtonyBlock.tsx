import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/RtonyBlock.styles'

const header = 'Hello, I am'
const name = '< rTonyCloud />'
const title = 'Software Developer'

const RtonyBlock: React.FC = (): JSX.Element => {
    return (
        <styles.container>
            <styles.firstSection>
                <styles.firstSectionContent>
                        <styles.firstSectionHeader>
                            <Typography>{header}</Typography>
                            <Typography variant="h1">{name}</Typography>
                        </styles.firstSectionHeader>
                        <styles.firstSectionTitle>
                            <Typography variant="h2">
                                {title}
                            </Typography>
                        </styles.firstSectionTitle>
                        <styles.DescriptionWrapper>
                            <Typography variant="h3">
                                2+  
                            </Typography>
                            <Typography>years of < br />
                                experience</Typography>
                            <Typography variant="h3">
                                5+ 
                            </Typography>
                            <Typography>projects completed <br /> around the world</Typography>
                        </styles.DescriptionWrapper>
                </styles.firstSectionContent>
            </styles.firstSection>
        </styles.container>
    )
}

export default RtonyBlock
