import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/SkillsBlock.styles'

const skillsTitle = '< Skills />'

const style = {
    color: 'white',
}

const SkillsBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant="h1" sx={style}>
                {skillsTitle}
            </Typography>
        </styles.Container>
    )
}

export default SkillsBlock
