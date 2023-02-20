import { CompanyCards, Typography } from '@/components/UIComponents'
import LineWithCircles from '@/components/UIComponents/HR'
import * as styles from '@/styles/pages/CompaniesBlock.styles'
import {
    qtumLogo,
    jciLogo,
    blockchainCenter,
    microMarketing,
    summitMediaLogo,
    spinnerNetworkLogo,
} from 'public/images'
const companyHeader = '<Companies/>'

const CompaniesBlock: React.FC = (): JSX.Element => {
    return (
        <styles.Block>
            <styles.BlockWrapper>
                <styles.AnimatedGradientText>
                    {companyHeader}
                </styles.AnimatedGradientText>
                <styles.CardWrapper>
                    <CompanyCards
                        companyLogo={qtumLogo}
                        alt="Qtum-Logo"
                        width={300}
                        height={300}
                        company=""
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open('https://www.qtum.org/', '_blank')
                        }
                    />
                    <CompanyCards
                        companyLogo={blockchainCenter}
                        alt="Blockchain-Center-logo"
                        width={0}
                        height={0}
                        company=""
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open(
                                'https://www.blockchaincenter.com/',
                                '_blank'
                            )
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
                        companyLogo={jciLogo}
                        alt="Johnson-Controls-logo"
                        width={0}
                        height={0}
                        company="Johnson Controls / Sensormatic"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open(
                                'https://www.johnsoncontrols.com/',
                                '_blank'
                            )
                        }
                    />
                    <CompanyCards
                        companyLogo={summitMediaLogo}
                        alt="Summit Media Pro"
                        width={300}
                        height={0}
                        company=""
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open(
                                'https://www.summitmediapro.com//',
                                '_blank'
                            )
                        }
                    />
                    <CompanyCards
                        companyLogo={spinnerNetworkLogo}
                        alt="Spinner-Network"
                        width={0}
                        height={0}
                        company="Spinner Network"
                        description="Airbnb is a community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 34,000 cities and 191 countries."
                        onClick={() =>
                            window.open(
                                'https://www.myspinnetwork.com/',
                                '_blank'
                            )
                        }
                    />
                </styles.CardWrapper>
            </styles.BlockWrapper>
        </styles.Block>
    )
}

export default CompaniesBlock
