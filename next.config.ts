/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Makes the app statically exportable
  images: {
    unoptimized: true, // Fixes Next.js image issues on static
  },
};

module.exports = nextConfig;
