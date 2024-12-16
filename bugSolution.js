```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
ex  experimental: {
    appDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Adjust webpack configuration here to fix module resolution problems
    // ... for example...
    // Add needed loader if you modify a file with special extensions
    config.module.rules.push({
        test: /.svg$/,
        use: ['@svgr/webpack']
      })
    return config;
  },
};

export default nextConfig;
```