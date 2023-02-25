import * as styles from '@/styles/pages/AboutMeBlock.styles'
import React from 'react'
import Image from 'next/image'
import AboutMeCard from '@/components/UIComponents/Cards/AboutMeCard/index'
import AboutTexts from '@/utils/portfolioTexts/About.texts'
import { Modal, Typography } from '@/components/UIComponents'
import { closeCodeIcon, dancingManIcon } from 'public/icons'
import useModal from '@/hooks/modalHook'
import VideoModal from '@/components/UIComponents/Modal/ModalCards'
import { jciTab, salsaCongressTab, sensualMovementTab } from 'public/images'
import useVideos from '../../hooks/useVideos'

const AboutMeBlock: React.FC = (): JSX.Element => {
    const { AboutMe, AboutMeText } = AboutTexts()
    const { isOpen, toggle } = useModal()
    const { videoUrl, handleVideo } = useVideos()

    return (
        <styles.Container>
            <styles.Wrapper>
                <styles.AboutText>
                    <styles.AnimatedGradientText id="about">
                        {AboutMe}
                    </styles.AnimatedGradientText>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        {AboutMeText()}
                    </Typography>
                </styles.AboutText>
                <styles.CardWrapper>
                    <AboutMeCard
                        title="Software Developer"
                        link="Hire Me"
                        image={closeCodeIcon}
                        alt="closeCodeIcon"
                        width={50}
                        height={50}
                        variantText="body1"
                        variantHeader="body2"
                        sxHeader={{ color: '#fff', fontSize: '24px' }}
                        sxBody={{
                            color: '#70FF00',
                            textDecoration: 'underline',
                        }}
                        //onpen linkedon on new tab
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/tony-rivera-full-stack-engineer/',
                                '_blank'
                            )
                        }
                    />
                    <AboutMeCard
                        title="Professional Dancer"
                        link="Watch Me"
                        image={dancingManIcon}
                        alt="dancingManIcon"
                        width={0}
                        height={0}
                        variantText="body1"
                        variantHeader="body2"
                        sxHeader={{ color: '#fff', fontSize: '24px' }}
                        sxBody={{
                            color: '#70FF00',
                            textDecoration: 'underline',
                        }}
                        onClick={toggle}
                    />
                </styles.CardWrapper>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <VideoModal url={videoUrl} />
                    <styles.VideoSelector>
                        <Image
                            src={salsaCongressTab}
                            alt="salsaCongressTab"
                            width={130}
                            height={130}
                            className="Osc-image"
                            onClick={handleVideo}
                        />
                        <Image
                            src={sensualMovementTab}
                            alt="sensualmovementTab"
                            width={130}
                            height={130}
                            className="Sm-image"
                            onClick={handleVideo}
                        />
                    </styles.VideoSelector>
                </Modal>
            </styles.Wrapper>
        </styles.Container>
    )
}
export default AboutMeBlock
