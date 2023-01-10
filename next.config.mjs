import { getHighlighter, BUNDLED_LANGUAGES } from "shiki";
import nextra from "nextra";
import remarkComment from "remark-comment";
import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const httpGrammer = fs.readFileSync(
  require.resolve("./common/http-tmlanguage.json"),
  "utf8"
);

const redirects = async () => {
  if (process.env.NODE_ENV !== "development") return [];

  return [
    {
      source: "/api-docs/:slug*",
      destination: "/docs/api-docs/:slug*",
      permanent: true,
    },
    {
      source: "/bigcommerce-for-wordpress/:slug*",
      destination: "/docs/bigcommerce-for-wordpress/:slug*",
      permanent: true,
    },
    {
      source: "/legacy/:slug*",
      destination: "/docs/legacy/:slug*",
      permanent: true,
    },
    {
      source: "/msf/:slug*",
      destination: "/docs/msf/:slug*",
      permanent: true,
    },
    {
      source: "/partner-apps/:slug*",
      destination: "/docs/partner-apps/:slug*",
      permanent: true,
    },
    {
      source: "/stencil-docs/:slug*",
      destination: "/docs/stencil-docs/:slug*",
      permanent: true,
    },
  ];
};

const rehypePrettyCodeOptions = {
  getHighlighter: (options) => {
    return getHighlighter({
      ...options,
      theme: "css-variables",
      langs: [
        ...BUNDLED_LANGUAGES,
        {
          id: "http",
          scopeName: "source.http",
          grammar: JSON.parse(httpGrammer),
          aliases: ["http", "https", "rest"],
        },
      ],
    });
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "storage.googleapis.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  redirects,
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [remarkComment],
    rehypePrettyCodeOptions,
  },
});

export default withNextra(nextConfig);
