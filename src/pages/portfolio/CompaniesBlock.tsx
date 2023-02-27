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
        <styles.Section>
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
                            description="Fast, Green, Stable, Decentralized. Qtum is a scalable Proof-of-Stake platform that allows developers to leverage the upstream benefits of Ethereum and Bitcoin."
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
                        description="The Blockchain Center is a virtual hub for individuals and enterprises to learn about and grow the blockchain sector - The creator of Zap Protocol."
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
                        description="Johnson Controls International is an American Irish-domiciled multinational conglomerate. The Sensormatic team produces security, RFID, Bluetooth equipment for buildings, retails, frachises. As of mid-2019, Johnson Controls employed 105,000 people in around 2,000 locations across six continents"
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
                        description="Summit Media Pro is a dynamic marketing company that specializes in helping businesses achieve their marketing goals. As the creators of MoveButlers.com, Summit Media Pro has demonstrated their expertise in creating compelling online platforms that engage and delight audiences."
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
                        description="Spinner Network is a forward-thinking company that is revolutionizing the way we think about freelancing. As the creators of OneGig, a cutting-edge platform that connects freelancers with high-quality projects, Spinner Network is empowering talented individuals to take control of their financial future in a decentralized environment. With a focus on transparency, fairness, and collaboration, Spinner Network is creating a community of freelancers who can work together to achieve their goals and build successful careers."
                        onClick={() =>
                            window.open(
                                'https://www.myspinnetwork.com/',
                                '_blank'
                            )
                        }
                    />
                </styles.CardWrapper>
            </styles.BlockWrapper>
        </styles.Section>
    )
}

export default CompaniesBlock
