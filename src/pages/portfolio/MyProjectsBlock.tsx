import { project1 } from '../../../public/images'
import { Typography } from '../../components/UIComponents'
import { ProjectCards } from '../../components/UIComponents/index'
import * as styles from '../../styles/pages/MyProjectsBlock.styles'

const projectHeader = '<My Projects />'

const MyProjectsBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Section>
            <styles.AnimatedGradientText>
                {projectHeader}
            </styles.AnimatedGradientText>
            <styles.Container>
                <ProjectCards
                    src={project1}
                    title="Project 1"
                    width={0}
                    height={349}
                    alt="Project-1"
                    sx={{ color: 'white' }}
                    variant="h5"
                />
                <styles.ButtonsRow>
                    <styles.BottomLeftCircles />
                    <styles.BottomMidCircles />
                    <styles.BottomRightCircles />
                </styles.ButtonsRow>
            </styles.Container>
        </styles.Section>
    )
}

export default MyProjectsBlock
