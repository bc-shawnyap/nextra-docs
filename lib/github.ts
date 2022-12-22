const GH_API_BASE_URL = `https://api.github.com`;
const config = {
  owner: "bigcommerce",
} as const;

const fetchConfig = {
  headers: {
    accept: "application/vnd.github+json",
    Authorization: process.env.GH_API_AUTH_TOKEN,
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

export const getGithubRepoContents = async ({
  repositoryName,
  path,
}: {
  repositoryName: string;
  path: string;
}) => {
  const repoResponse = await fetch(
    `${GH_API_BASE_URL}/repos/${config.owner}/${repositoryName}/contents/${path}`,
    fetchConfig
  );

  return await repoResponse.json();
};

export const getGitTreeWithSHA1 = async ({
  repositoryName,
  SHA1,
}: {
  repositoryName: string;
  SHA1: string;
}) => {
  const repoResponse = await fetch(
    `${GH_API_BASE_URL}/repos/${config.owner}/${repositoryName}/git/trees/${SHA1}?recursive=true`,
    fetchConfig
  );

  return await repoResponse.json();
};
