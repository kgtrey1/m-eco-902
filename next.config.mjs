/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
            {
                source: '/:path*\\.(ico|svg)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=259200',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
