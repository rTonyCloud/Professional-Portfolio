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
} from 'public/icons/index'

const SkillsImages = [
    {
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
        image: (
            <Image src={html5Icon} alt="html5" width="109" height="124.68" />
        ),
    },
    {
        image: (
            <Image
                src={blockchainIcon}
                alt="blockchain"
                width="128"
                height="128"
            />
        ),
    },
    {
        image: <Image src={cssIcon} alt="css" width="110" height="125.3" />,
    },
    {
        image: (
            <Image src={ethereumIcon} alt="ethereum" width="128" height="128" />
        ),
    },
    {
        image: (
            <Image src={reactIcon} alt="react" width="125.2" height="111.8" />
        ),
    },
    {
        image: (
            <Image src={reduxIcon} alt="redux" width="128" height="121.52" />
        ),
    },
    {
        image: (
            <Image src={nodejsIcon} alt="nodejs" width="107" height="120.92" />
        ),
    },
    {
        image: <Image src={nextjsIcon} alt="nextjs" width="128" height="128" />,
    },
]

export { SkillsImages }
