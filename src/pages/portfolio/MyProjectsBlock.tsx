import * as styles from '@/styles/pages/MyProjectsBlock.styles'
import useProjects from '@/hooks/useProjects'
import { Modal } from '@/components/UIComponents'
import ProjectsModal from '@/components/UIComponents/Modal/ModalCards/ProjectsModal'

import {
    ProjectHeader,
    Projects,
} from '@/utils/portfolioTexts/MyProjects.texts'

const MyProjectsBlock: React.FC = (): JSX.Element => {
    const { Settings, ProjectCards, Slider, toggle, isOpen } = useProjects()

    return (
        <styles.Section>
            <styles.AnimatedGradientText id="projects">
                {ProjectHeader}
            </styles.AnimatedGradientText>
            <styles.Container>
                <Slider {...Settings}>
                    {Projects.map((projects) => (
                        <ProjectCards
                            key={projects.id}
                            image={projects.image}
                            title={projects.title}
                            width={projects.width}
                            height={projects.height}
                            alt={projects.alt}
                            sx={projects.sx}
                            variant={projects.variant}
                            modal={projects.modal}
                        />
                    ))}
                </Slider>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ProjectsModal url={''} />
                </Modal>
            </styles.Container>
        </styles.Section>
    )
}

export default MyProjectsBlock
