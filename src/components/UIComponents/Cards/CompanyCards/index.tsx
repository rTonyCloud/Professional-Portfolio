import * as styles from './CompanyCards.styles'

interface CompanyCardsProps {
    companyLogo: React.ReactNode | string
    company: string
    description: string
    onClick: () => void
}

const CompanyCards: React.FC<CompanyCardsProps> = (props: CompanyCardsProps): JSX.Element => {
    const { companyLogo, company, description, onClick } = props

    return <></>
}

export default CompanyCards
