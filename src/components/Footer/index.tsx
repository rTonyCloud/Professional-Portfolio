import * as styles from './footer.styles'

import FooterCards from '../UIComponents/Cards/FooterCards'
import {
    footerGithubIcon,
    footerGmailIcon,
    footerLinkedinIcon,
} from 'public/icons'
import { url } from 'inspector'

const footerCopyRight =
    'All rights reserved © 2023 - SOFTWARE DEVELOPER - by rTONYCLOUD'

const Footer: React.FC = (): JSX.Element => {
    return (
        <styles.footerContainer>
            <styles.line />
            <styles.footerContent>
                <FooterCards
                    src={footerGmailIcon}
                    title="Gmail"
                    alt="Gmail"
                    onClick={() => {
                        const URL = 'mailto:' + 'rtonycloud@gmail.com'
                        if (typeof window !== 'undefined') {
                            window.open(URL, '_blank')
                        }
                    }}
                />
                <FooterCards
                    src={footerGithubIcon}
                    title="Github"
                    alt="Github"
                    onClick={() => {
                        const URL = 'https://www.github.com/rtonycloud'
                        if (typeof window !== 'undefined') {
                            window.open(URL, '_blank')
                        }
                    }}
                />
                <FooterCards
                    src={footerLinkedinIcon}
                    title="LinkedIn"
                    alt="LinedkIn"
                    onClick={() => {
                        const URL =
                            'https://www.linkedin.com/in/tony-rivera-full-stack-engineer/'
                        if (typeof window !== 'undefined') {
                            window.open(URL, '_blank')
                        }
                    }}
                />
            </styles.footerContent>
            <styles.footerCopyRight>{footerCopyRight}</styles.footerCopyRight>
        </styles.footerContainer>
    )
}

export default Footer
