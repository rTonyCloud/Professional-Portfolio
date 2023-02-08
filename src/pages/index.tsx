// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RtonyBlock from './portfolio/RtonyBlock'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Header />
            <RtonyBlock />
            <Footer />
        </>
    )
}
