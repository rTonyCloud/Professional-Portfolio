import { heartIcon, rtonycloudLogo } from '@/assets/icons'
import Image from 'next/image'
import * as styles from './header.styles.ts'
import { Button } from '../UIComponents/index.ts'

const navItems = ['About', 'Skills', 'Projects', 'Linkedin', 'Github']

const headerText = ['Download Resume']

const buttonStyles = {
    display: 'flex',
}

const Header: React.FC = (): JSX.Element => {
    return (
        <styles.headerWrapper>
            <styles.headerContent>
                {navItems.map((navItem, index) => (
                    <styles.navContent key={index}>{navItem}</styles.navContent>
                ))}
                <Button variant="blue" sx={buttonStyles}>
                    <Image src={heartIcon} alt="hello" width="20" />
                    {headerText}
                </Button>
            </styles.headerContent>
            <styles.logoWrapper>
                <Image src={rtonycloudLogo} alt="rtonycloud logo" width="200" />
            </styles.logoWrapper>
        </styles.headerWrapper>
    )
}

export default Header
