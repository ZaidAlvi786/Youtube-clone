const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI, // Exposes the variable (not recommended for secrets)
  },
};

export default nextConfig;
