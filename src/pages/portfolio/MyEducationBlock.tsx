import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo, umLogo, wguLogo } from 'public/images'
import Toggle from '@/components/UIComponents/Toggle'
import React from 'react'
import useMyEdu from '@/hooks/useMyEdu'
import { EduData, EduData2 } from '@/utils/portfolioTexts/Education.texts'

const eduHeader = '<My Education />'

const MyEducationBlock: React.FC = (): JSX.Element => {
    const { active, handleToggle } = useMyEdu()
    return (
        <styles.Section>
            <styles.Header>
                <styles.AnimatedGradientText>
                    {eduHeader}
                </styles.AnimatedGradientText>
                <Toggle
                    labels={['Education', 'Certifications']}
                    defaultLabel="Education"
                    onChange={(labels) => handleToggle(labels)}
                />
            </styles.Header>
            {active == 'Education' ? (
                <styles.Container>
                    <styles.Card>
                        {EduData.map((edu) => (
                            <EduCards
                                key={edu.id}
                                image={edu.image}
                                width={edu.width}
                                height={edu.height}
                                sx={edu.sx}
                                imgAlt={edu.imgAlt}
                                title={edu.title}
                                company={edu.company}
                                issueDate={edu.issueDate}
                                buttonText={edu.buttonText}
                                onClick={edu.onClick}
                            />
                        ))}
                    </styles.Card>
                </styles.Container>
            ) : (
                <styles.Container>
                    <styles.Card>
                    {EduData2.map((edu) => (
                            <EduCards
                                key={edu.id}
                                image={edu.image}
                                width={edu.width}
                                height={edu.height}
                                sx={edu.sx}
                                imgAlt={edu.imgAlt}
                                title={edu.title}
                                company={edu.company}
                                issueDate={edu.issueDate}
                                buttonText={edu.buttonText}
                                onClick={edu.onClick}
                            />
                        ))}
                    </styles.Card>
                </styles.Container>
            )}
        </styles.Section>
    )
}

export default MyEducationBlock
