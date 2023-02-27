import { ProjectCards } from '@/components/UIComponents/index'
import useModal from './useModal'
import Slider from 'react-slick'

export default function useProjects() {
    const { isOpen, toggle } = useModal()

    const Settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: `slick-dots slick-thumb`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }


    return { Settings, ProjectCards, Slider, isOpen, toggle }
}
