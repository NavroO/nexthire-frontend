/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/pages/board",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
