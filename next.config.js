/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => {
        return [
            {
                source: "/.well-known/apple-app-site-association",
                headers: [{key: "Content-Type", value: "application/json"}]
            }
        ];
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
