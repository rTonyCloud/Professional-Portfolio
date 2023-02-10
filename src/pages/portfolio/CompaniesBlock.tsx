import { Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/CompaniesBlock.styles'


const CompaniesBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>Companies block</Typography>
        </styles.Container>
    )
}

export default CompaniesBlock