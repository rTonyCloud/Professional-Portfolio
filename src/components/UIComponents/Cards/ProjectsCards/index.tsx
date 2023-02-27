import Image, { StaticImageData } from 'next/image'
import * as styles from './ProjectCards.styles'
import Typography, { Variant } from '../../Typography'

interface ProjectCardsProps {
    src: StaticImageData | string
    title: string
    width: number
    height: number
    alt: string
    sx?: React.CSSProperties
    variant?: Variant
    modal?: () => void
}

const ProjectCards: React.FC<ProjectCardsProps> = (
    props: ProjectCardsProps
): JSX.Element => {
    const { src, title, width, height, alt, sx, variant, modal } = props
    return (
        <styles.ProjectCard onClick={modal}>
            <styles.ProjectImage>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={'image'}
                />
            </styles.ProjectImage>
            <styles.ProjectBody>
                <styles.BodyTitle>
                    <Typography variant={variant} sx={sx}>
                        {title}
                    </Typography>
                </styles.BodyTitle>
            </styles.ProjectBody>
        </styles.ProjectCard>
    )
}
export default ProjectCards
