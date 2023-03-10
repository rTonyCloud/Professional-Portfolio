import stylesGuide from '@/styles/components/components.styles'
import {
    BlockchainCouncil,
    awsLogo,
    gcpLogo,
    umLogo,
    wguLogo,
} from 'public/images'

const clickhandler = () => {
    console.log('View Certificate')
}

const { EduCardsStyles } = stylesGuide()

export const eduHeader = '<My Education />'

export const EduData = [
    {
        id: 1,
        image: umLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'um',
        title: 'Full Stack Web Development',
        company: 'University of Miami',
        issueDate: 'Issue Date: Dec, 2021',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 2,
        image: wguLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'wgu',
        title: 'Computer Science B.S',
        company: 'University of Miami',
        issueDate: 'Issue Date: InProgress(2024)',
        buttonText: 'View Degree',
        onClick: clickhandler,
    },
]

export const EduData2 = [
    {
        id: 3,
        image: gcpLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'GCP',
        title: 'Associate Cloud Engineer',
        company: 'Google Cloud Platform',
        issueDate: 'Issue Date: March, 2021',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 4,
        image: awsLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'AWS',
        title: 'AWS Certified Developer',
        company: 'Amazon Web Services',
        issueDate: 'Issue Date: December, 2020',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 5,
        image: awsLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'AWS',
        title: 'AWS Certified Solution Architect',
        company: 'Amazon Web Services',
        issueDate: 'Issue Date: November, 2019',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 6,
        image: awsLogo,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'AWS',
        title: 'Amazon Cloud Practitioner',
        company: 'Amazon Web Services',
        issueDate: 'Issue Date: November, 2019',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 7,
        image: BlockchainCouncil,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'Blockchain-Council',
        title: 'Certified Smart Contract Developer',
        company: 'Blockchain Council',
        issueDate: 'Issue Date: December, 2021',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
    {
        id: 8,
        image: BlockchainCouncil,
        width: 0,
        height: 0,
        sx: EduCardsStyles,
        imgAlt: 'wgu',
        title: 'Certified Solidity Developer',
        company: 'Blockchain Council',
        issueDate: 'Issue Date: December, 2021',
        buttonText: 'View Certification',
        onClick: clickhandler,
    },
]
