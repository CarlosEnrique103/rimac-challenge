// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   turbopack: {
//     rules: {
//       "*.svg": {
//         loaders: ["@svgr/webpack"],
//         as: "*.js",
//       },
//     },
//   },
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig = {
//   experimental: {
//     svgr: true,
//   },
// } satisfies NextConfig as any; // 👈 ignora el error de tipo

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
