import type { NextConfig } from "next";

const repoName = "LUTH_COMPANY";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: `${basePath}/`,
        trailingSlash: true,
      }
    : {}),
  // assetPrefix는 _next 번들에만 붙고 public/ 자산에는 적용되지 않는다.
  // unoptimized 이미지가 basePath 없이 404 나므로 값을 노출해 직접 붙인다.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
