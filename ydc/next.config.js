module.exports = {
  env: {
    LocalHost: "http://localhost:3001",
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty",
        "fs-extra": "empty",
      };
    }
    return config;
  },
};
