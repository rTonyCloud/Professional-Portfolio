import * as styles from './footer.styles'

import FooterCards from '../UIComponents/Cards/FooterCards'
import {
    footerGithubIcon,
    footerGmailIcon,
    footerLinkedinIcon,
} from 'public/icons'
import FooterText from '@/utils/portfolioTexts/Footer.texts'
import useClickHandler from '@/hooks/useClickHandler'

// eslint-disable-next-line react-hooks/rules-of-hooks
const { footerClickHandler } = useClickHandler()

const { footerCopyRight } = FooterText()

const Footer: React.FC = (): JSX.Element => {
    return (
        <styles.footerContainer>
            <styles.line />
            <styles.footerContent>
                <FooterCards
                    src={footerGmailIcon}
                    title="Gmail"
                    alt="Gmail"
                    onClick={() =>
                        footerClickHandler('mailto:' + 'rtonycloud@gmail.com')
                    }
                />
                <FooterCards
                    src={footerGithubIcon}
                    title="Github"
                    alt="Github"
                    onClick={() =>
                        footerClickHandler('https://www.github.com/rtonycloud')
                    }
                />
                <FooterCards
                    src={footerLinkedinIcon}
                    title="LinkedIn"
                    alt="LinedkIn"
                    onClick={() =>
                        footerClickHandler(
                            'https://www.linkedin.com/in/tony-rivera-full-stack-engineer/'
                        )
                    }
                />
            </styles.footerContent>
            <styles.footerCopyRight>{footerCopyRight}</styles.footerCopyRight>
        </styles.footerContainer>
    )
}

export default Footer
