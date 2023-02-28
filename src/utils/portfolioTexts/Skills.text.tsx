import Image from 'next/image'

import {
    javascriptIcon,
    typescriptIcon,
    html5Icon,
    blockchainIcon,
    cssIcon,
    ethereumIcon,
    reactIcon,
    reduxIcon,
    nodejsIcon,
    nextjsIcon,
    pythonLogo,
    rustLogo,
    wagmiIcon,
    javaIcon,
    sqlIcon,
    solidityIcon,
    hardhatIcon,
    gitIcon,
    awsIcon,
    jestIcon,
    gcpIcon,
} from 'public/icons/index'

const SkillsImages = [
    {
        id: 1,
        image: (
            <Image
                src={javascriptIcon}
                alt="javascript"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 2,
        image: (
            <Image
                src={typescriptIcon}
                alt="typescript"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 3,
        image: (
            <Image src={html5Icon} alt="html5" width="109" height="124.68" />
        ),
    },
    {
        id: 4,
        image: <Image src={cssIcon} alt="css" width="110" height="125.3" />,
    },
    {
        id: 5,
        image: (
            <Image src={reactIcon} alt="react" width="125.2" height="111.8" />
        ),
    },
    {
        id: 6,
        image: (
            <Image src={reduxIcon} alt="redux" width="128" height="121.52" />
        ),
    },
    {
        id: 7,
        image: (
            <Image src={nodejsIcon} alt="nodejs" width="107" height="120.92" />
        ),
    },
    {
        id: 8,
        image: <Image src={nextjsIcon} alt="nextjs" width="128" height="128" />,
    },
    {
        id: 9,
        image: (
            <Image src={pythonLogo} alt="pythonLogo" width="128" height="128" />
        ),
    },
    {
        id: 10,
        image: <Image src={rustLogo} alt="python" width="128" height="128" />,
    },
]

const SkillsImages2 = [
    {
        id: 1,
        image: <Image src={gitIcon} alt="git" width="150" height="150" />,
    },
    {
        id: 2,
        image: (
            <Image
                src={javaIcon}
                alt="typescript"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 3,
        image: <Image src={gcpIcon} alt="gcp-logo" width="125" height="125" />,
    },
    {
        id: 4,
        image: (
            <Image src={awsIcon} alt="jest-logo" width="125" height="125" />
        ),
    },
    {
        id: 5,
        image: <Image src={sqlIcon} alt="sql-logo" width="125" height="125" />,
    },
    {
        id: 6,
        image: (
            <Image
                src={blockchainIcon}
                alt="blockchainIcon"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 7,
        image: (
            <Image
                src={solidityIcon}
                alt="solidityIcon"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 8,
        image: (
            <Image
                src={hardhatIcon}
                alt="hardhatIcon"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 9,
        image: (
            <Image
                src={ethereumIcon}
                alt="ethereumIcon"
                width="125"
                height="125"
            />
        ),
    },
    {
        id: 10,
        image: (
            <Image
                src={wagmiIcon}
                alt="wagmiIcon"
                width="125"
                height="125"
            />
        ),
    },
]

export { SkillsImages, SkillsImages2 }
