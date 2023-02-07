/* @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        //enables swc for style components
        styledComponents: true,
    },
    allowimportingTsExtension: true,
    reactStrictMode: true,
}

module.exports = nextConfig
