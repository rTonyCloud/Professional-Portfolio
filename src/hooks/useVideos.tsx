import React from 'react'
import useModal from './useModal'

export default function useVideos() {
    const { isOpen, toggle } = useModal()
    const [videoUrl, setVideoUrl] = React.useState<string>(
        'https://vimeo.com/801463515'
    )
    const handleVideo = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault()
        const { className } = e.currentTarget
        if (className === 'Osc-image') {
            setVideoUrl('https://vimeo.com/801463515')
        } else if (className === 'Sm-image') {
            setVideoUrl('https://vimeo.com/801464201')
        } else if (className === 'Jci-image') {
            setVideoUrl('https://vimeo.com/801464201')
        }
    }

    return { videoUrl, handleVideo, isOpen, toggle }
}
