/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/.well-known/apple-app-site-association.json',
            },
        ]
    },

}

module.exports = nextConfig
