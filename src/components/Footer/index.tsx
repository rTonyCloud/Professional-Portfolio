import * as styles from './footer.styles'

//texts
import { footerLinks, footerCopyRight } from '@/utils/texts/footer.text'
import IconCardLayout from '@/components/UIComponents/Cards/FooterCards'


const Footer: React.FC = (): JSX.Element => {
    return (
        <styles.footerContainer>
            <styles.line />
            <styles.footerContent>
                {footerLinks.map((footerLink) => (
                    <IconCardLayout
                        key={footerLink.title}
                        image={footerLink.image}
                        title={footerLink.title}
                        href={footerLink.url}
                    />
                ))}
            </styles.footerContent>
            <styles.footerCopyRight>{footerCopyRight}</styles.footerCopyRight>
        </styles.footerContainer>
    )
}

export default Footer
