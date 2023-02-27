import * as styles from '@/styles/pages/SkillsBlock.styles'
import { SkillsImages, SkillsImages2 } from '@/utils/portfolioTexts/Skills.text'
import { rightArrowIcon } from 'public/icons'
import Image from 'next/image'
import React from 'react'

const skillsTitle = '< Skills />'

const RightArrowStyles = {
    display: 'flex',
    marginLeft: '20px',
}

const leftArrowStyles = {
    display: 'flex',
    marginLeft: '20px',
    transform: 'rotate(180deg)',
}

const SkillsBlock: React.FC = (): JSX.Element => {
    const [show, setShow] = React.useState(false)

    return (
        <styles.Container>
            <styles.AnimatedGradientText id="skills">
                {skillsTitle}
            </styles.AnimatedGradientText>
            {!show ? (
                <styles.SkillsSlider>
                    <styles.RightArrow onClick={() => setShow(true)}>
                        <Image
                            src={rightArrowIcon}
                            width="10"
                            height="50"
                            alt="right-arrow"
                            style={RightArrowStyles}
                        />
                    </styles.RightArrow>
                    <styles.Wrapper>
                        {SkillsImages.map((skills, index) => {
                            return (
                                <styles.Skills key={index}>
                                    {skills.image}
                                </styles.Skills>
                            )
                        })}
                    </styles.Wrapper>
                </styles.SkillsSlider>
            ) : (
                <styles.SkillsSlider>
                    <styles.LeftArrow onClick={() => setShow(false)}>
                        <Image
                            src={rightArrowIcon}
                            width="10"
                            height="50"
                            alt="left-arrow"
                            style={leftArrowStyles}
                        />
                    </styles.LeftArrow>
                    <styles.Wrapper>
                        {SkillsImages2.map((skills, index) => {
                            return (
                                <styles.Skills key={index}>
                                    {skills.image}
                                </styles.Skills>
                            )
                        })}
                    </styles.Wrapper>
                </styles.SkillsSlider>
            )}
            <styles.ButtonsRow>
                <styles.BottomLeftCircles onClick={() => setShow(false)} show={!show} />
                <styles.BottomRightCircles onClick={() => setShow(true)}  show={show}/>
            </styles.ButtonsRow>
        </styles.Container>
    )
}

export default SkillsBlock
