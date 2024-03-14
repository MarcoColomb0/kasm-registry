/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MarcoColomb0',
    description: 'Custom Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://marcocolomb0.github.io/kasm-registry/',
    contactUrl: 'https://marco.wf',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
