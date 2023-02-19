import * as styles from './TypingAnimation.styles'
import React, { useState, useEffect } from 'react'

interface TypingAnimationProps {
    texts: string[]
}

const TypingAnimation: React.FC<TypingAnimationProps> = (
    props: TypingAnimationProps
): JSX.Element => {
    const { texts } = props

    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(20000)

    useEffect(() => {
        const handleTyping = () => {
            const text = texts[currentTextIndex]
            const textLength = text.length

            if (isDeleting) {
                setCurrentText(text.substring(0, currentText.length - 1))
            } else {
                setCurrentText(text.substring(0, currentText.length + 1))
            }

            if (!isDeleting && currentText === text) {
                setTimeout(() => setIsDeleting(true), 5000)
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false)
                setCurrentTextIndex((currentTextIndex + 1) % texts.length)
            }

            const typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed

            setTimeout(handleTyping, typingDelay)
        }

        handleTyping()
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, texts])

    if (typeof window === 'undefined') {
        // If running on the server, don't render the animation
        return <>{texts[currentTextIndex]}</>
    }

    return (
        <styles.AnimatedGradientText>{currentText}</styles.AnimatedGradientText>
    )
}

export default TypingAnimation
