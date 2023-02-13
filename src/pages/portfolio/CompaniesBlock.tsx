import { CompanyCards, Typography } from '@/components/UIComponents'
import LineWithCircles from '@/components/UIComponents/HR'
import * as styles from '@/styles/pages/CompaniesBlock.styles'
import {
    QtumLogo,
    JCLogo,
    BlockChainCenter,
    MicroMarketing,
    SpinnerNetworkLogo,
} from '@/assets/images'
const companyHeader = '< Companies />'

const CompaniesBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Block>
            <styles.BlockWrapper>
            <Typography variant="h1" sx={{ color: 'white' }}>
                {companyHeader}
            </Typography>
                <styles.CardWrapper>
                    <CompanyCards
                        companyLogo={QtumLogo}
                        alt="Qtum Logo"
                        width={100}
                        height={100}
                        company="QTUM"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                    <CompanyCards
                        companyLogo={QtumLogo}
                        alt="Qtum Logo"
                        width={100}
                        height={100}
                        company="QTUM"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                </styles.CardWrapper>
                <styles.LineContainer>
                    <styles.Line />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
                </styles.LineContainer>
                <styles.CardWrapper>
                    <CompanyCards
                        companyLogo={QtumLogo}
                        alt="Qtum Logo"
                        width={100}
                        height={100}
                        company="QTUM"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                    <CompanyCards
                        companyLogo={QtumLogo}
                        alt="Qtum Logo"
                        width={100}
                        height={100}
                        company="QTUM"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                    <CompanyCards
                        companyLogo={QtumLogo}
                        alt="Qtum Logo"
                        width={100}
                        height={100}
                        company="QTUM"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                </styles.CardWrapper>
            </styles.BlockWrapper>
        </styles.Block>
    )
}

export default CompaniesBlock
