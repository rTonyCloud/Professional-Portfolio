import { Typography } from '@/components/UIComponents'
import LineWithCircles from '@/components/UIComponents/HR'
import * as styles from '@/styles/pages/CompaniesBlock.styles'

const companyHeader = '< Companies />'

const CompaniesBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Container>
            <Typography variant='h1' sx={{ color: 'white' }}>{companyHeader}</Typography>
            <LineWithCircles />
        </styles.Container>
    )
}

export default CompaniesBlock
