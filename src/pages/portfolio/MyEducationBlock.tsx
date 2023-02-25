import { EduCards, Typography } from '@/components/UIComponents'
import * as styles from '@/styles/pages/MyEducationBlock.styles'
import { cardLogo, umLogo, wguLogo } from 'public/images'
import Toggle from '@/components/UIComponents/Toggle'
import React from 'react'
const eduHeader = '<My Education />'

const MyEducationBlock: React.FC = (): JSX.Element => {
    const [active, setActive] = React.useState('Education')

    const handleToggle = (labels: string) => {
        setActive(labels)
    }

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
            <styles.Container>
                {active == 'Education' ? (
                    <>
                        <styles.Card>
                            <EduCards
                                image={umLogo}
                                width={0}
                                height={0}
                                sx={{
                                    fontSize: '36px',
                                    position: 'relative',
                                    lineHeight: '40px',
                                    top: '-40px',
                                }}
                                imgAlt="um"
                                title="Full Stack Web Development"
                                company="University of Miami"
                                issueDate="Issue Date: Dec, 2021"
                                buttonText="View Certification"
                                onClick={() => console.log('View Certificate')}
                            />
                        </styles.Card>
                        <styles.Card>
                            <EduCards
                                image={wguLogo}
                                width={0}
                                height={0}
                                sx={{
                                    fontSize: '36px',
                                    position: 'relative',
                                    lineHeight: '40px',
                                    top: '-40px',
                                }}
                                imgAlt="wgu"
                                title="Computer Science B.S"
                                company="Western Governors University"
                                issueDate="Issue Date: InProgress(2024)"
                                buttonText="View Degree"
                                onClick={() => console.log('View Certificate')}
                            />
                        </styles.Card>
                    </>
                ) : (
                    <styles.Card>
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                        <EduCards
                            image={cardLogo}
                            width={0}
                            height={0}
                            sx={{
                                fontSize: '36px',
                                position: 'relative',
                                lineHeight: '40px',
                                top: '-40px',
                            }}
                            imgAlt="wgu"
                            title="Computer Science B.S"
                            company="Western Governors University"
                            issueDate="Issue Date: InProgress(2024)"
                            buttonText="View Degree"
                            onClick={() => console.log('View Certificate')}
                        />
                    </styles.Card>
                    
                    
                )}
            </styles.Container>
        </styles.Section>
    )
}

export default MyEducationBlock
