/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export -> "out/" klasörüne build sonrası tüm site çıkar
  output: 'export',
  // Static export ortamında Next image optimizer çalışmadığı için zorunlu
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tommybaby.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'rforrabbit.com',
      },
    ],
  },
  // Statik hosting (Netlify, S3, IIS, Apache vb.) için trailing slash + URL/asset uyumu
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
