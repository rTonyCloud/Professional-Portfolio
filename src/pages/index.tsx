// import Head from 'next/head'
// import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RtonyBlock from './portfolio/RtonyBlock'
import AboutMeBlock from './portfolio/AboutMeBlock'
import SkillsBlock from './portfolio/SkillsBlock'
import MyProjectsBlock from './portfolio/MyProjectsBlock'
import MyEducationBlock from './portfolio/MyEducationBlock'
import CompaniesBlock from './portfolio/CompaniesBlock'
import ClientReviewBlock from './portfolio/ClientReviewsBlock'


export default function Home() {
    return (
        <>
            <Header />
            <RtonyBlock />
            <AboutMeBlock />
            <SkillsBlock />
            <MyProjectsBlock />
            <MyEducationBlock />
            <CompaniesBlock />
            <ClientReviewBlock />
            <Footer />
        </>
    )
}
