/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/material-ui-nextjs-ts/' : '',
    basePath: isProd ? '/material-ui-nextjs-ts' : '',
    output: 'export'
};

export default nextConfig;

