import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/SkillsBlock.styles'

const SkillsBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant="h1" sx={{color:'white'}}>Skills</Typography>
        </styles.Container>
    )
}

export default SkillsBlock
