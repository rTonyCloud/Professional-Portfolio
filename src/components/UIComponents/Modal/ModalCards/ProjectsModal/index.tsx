import React from 'react'
import * as styles from './ProjectsModal.styles'
import { Typography } from '@/components/UIComponents'


interface Props {
    url: string
    
}

const ProjectsModal: React.FC<Props> = (props: Props): JSX.Element => {
    const { url } = props
    return (
        <styles.Container>
            <Typography variant='h6'>hello world</Typography>
        </styles.Container>
    )
}

export default ProjectsModal
