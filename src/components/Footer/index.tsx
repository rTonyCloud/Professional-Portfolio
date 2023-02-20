import * as styles from './footer.styles'

import FooterCards from '@/components/UIComponents/Cards/FooterCards'
import {
    footerGithubIcon,
    footerGmailIcon,
    footerLinkedinIcon,
} from 'public/icons'

const footerCopyRight =
    'All rights reserved © 2023 - SOFTWARE DEVELOPER - by rTONYCLOUD'

const Footer: React.FC = (): JSX.Element => {
    return (
        <styles.footerContainer>
            <styles.line />
            <styles.footerContent>
                <FooterCards src={footerGmailIcon} title="Gmail" alt="Gmail" />
                <FooterCards
                    src={footerGithubIcon}
                    title="Github"
                    alt="Github"
                />
                <FooterCards
                    src={footerLinkedinIcon}
                    title="LinkedIn"
                    alt="LinedkIn"
                />
            </styles.footerContent>
            <styles.footerCopyRight>{footerCopyRight}</styles.footerCopyRight>
        </styles.footerContainer>
    )
}

export default Footer
