/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', process.env.NEXT_PUBLIC_PAYLOAD_URL]
          .filter(Boolean)
          .map(url => url.replace(/https?:\/\//, '')),
      },
};

export default nextConfig;
