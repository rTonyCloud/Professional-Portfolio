import * as styles from '@/styles/pages/SkillsBlock.styles'
import { SkillsImages } from '@/utils/portfolioTexts/Skills.text'
import { rightArrowIcon } from 'public/icons'
import Image from 'next/image'

const skillsTitle = '< Skills />'

const style = {
    color: 'white',
}


const RightArrowStyles ={
    display: 'flex',
    marginLeft: '20px',
}

const leftArrowStyles ={
    display: 'flex',
    marginLeft: '20px',
    transform: 'rotate(180deg)',
}

const SkillsBlock: React.FC = (): JSX.Element => {
    return (
        <>
            <styles.Container>
                <styles.AnimatedGradientText>
                    {skillsTitle}
                </styles.AnimatedGradientText>
                <styles.SkillsSlider>
                    <styles.LeftArrow><Image src={rightArrowIcon} width='10' height='50' alt='right-arrow' style={RightArrowStyles}/></styles.LeftArrow>
                    <styles.Wrapper>
                        {SkillsImages.map((skills, index) => {
                            return (
                                <styles.Skills key={index}>
                                    {skills.image}
                                </styles.Skills>
                            )
                        })}
                    </styles.Wrapper>
                    <styles.ButtonsRow>
                    <styles.BottomLeftCircles />
                    <styles.BottomRightCircles />
                    </styles.ButtonsRow>
                </styles.SkillsSlider>
            </styles.Container>
        </>
    )
}

export default SkillsBlock
