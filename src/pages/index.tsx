import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const RtonyBlock = dynamic(() => import('./portfolio/RtonyBlock'))
const AboutMeBlock = dynamic(() => import('./portfolio/AboutMeBlock'))
const SkillsBlock = dynamic(() => import('./portfolio/SkillsBlock'))
const MyProjectsBlock = dynamic(() => import('./portfolio/MyProjectsBlock'))
const MyEducationBlock = dynamic(() => import('./portfolio/MyEducationBlock'))
const CompaniesBlock = dynamic(() => import('./portfolio/CompaniesBlock'))
const ClientReviewBlock = dynamic(
    () => import('./portfolio/ClientReviewsBlock')
)
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
    return (
        <>
            <Head>
                <title>Rtony | Portfolio</title>
                <meta
                    name="description"
                    content="Rtony's portfolio website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
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
