import * as styles from '@/styles/pages/MyProjectsBlock.styles'
import { project1 } from 'public/images'
import useProjects from '@/hooks/useProjects'
import { Modal } from '@/components/UIComponents'
import ProjectsModal from '@/components/UIComponents/Modal/ModalCards/ProjectsModal'

const projectHeader = '<My Projects />'

const MyProjectsBlock: React.FC = (): JSX.Element => {
    const { Settings, ProjectCards, Slider, toggle, isOpen } = useProjects()

    return (
        <styles.Section>
            <styles.AnimatedGradientText id="projects">
                {projectHeader}
            </styles.AnimatedGradientText>
            <styles.Container>
                <Slider {...Settings}>
                    <ProjectCards
                        src={project1}
                        title="Project 1"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                        modal={() => toggle()}
                    />
                    <ProjectCards
                        src={project1}
                        title="Project 2"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />

                    <ProjectCards
                        src={project1}
                        title="Project 3"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />

                    <ProjectCards
                        src={project1}
                        title="Project 4"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />
                    <ProjectCards
                        src={project1}
                        title="Project 5"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />
                    <ProjectCards
                        src={project1}
                        title="Project 6"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />
                    <ProjectCards
                        src={project1}
                        title="Project 7"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />
                    <ProjectCards
                        src={project1}
                        title="Project 8"
                        width={0}
                        height={349}
                        alt="Project-1"
                        sx={{ color: 'white' }}
                        variant="h5"
                    />
                </Slider>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ProjectsModal url={''} />
                </Modal>
            </styles.Container>
            {/* <styles.ButtonsRow>
                <styles.BottomLeftCircles />
                <styles.BottomMidCircles />
                <styles.BottomRightCircles />
            </styles.ButtonsRow> */}
        </styles.Section>
    )
}

export default MyProjectsBlock
