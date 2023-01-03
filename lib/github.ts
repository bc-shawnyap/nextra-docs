import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.GH_API_AUTH_TOKEN });

const octokitConfig = {
  owner: "bigcommerce",
  repo: "dev-docs",
} as const;

export const getRepoContentsWithOctokit = async (path: string) => {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
    {
      ...octokitConfig,
      path,
    }
  );

  return response;
};

export const getTreeWithOctokit = async (SHA1: string) => {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/git/trees/{tree_sha}{?recursive}",
    {
      ...octokitConfig,
      tree_sha: SHA1,
      recursive: true,
    }
  );

  return response;
};