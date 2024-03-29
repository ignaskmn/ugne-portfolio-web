/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'admin.ugnemakselyte.com']
          .filter(Boolean)
          .map(url => url.replace(/https?:\/\//, '')),
      },
};

export default nextConfig;
