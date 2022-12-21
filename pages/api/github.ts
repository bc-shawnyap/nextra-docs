import type { NextApiRequest, NextApiResponse } from "next";

import { getGithubRepoContents, getGitTreeWithSHA1 } from "lib/github";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { slug },
    method,
  } = req;
  if (method !== "GET") return res.status(400);

  const contents = await getGithubRepoContents({
    repositoryName: "dev-docs",
    path: "docs",
  });

  const routeFound = contents.find((content) => slug === content.name);

  const { tree } = routeFound
    ? await getGitTreeWithSHA1({
        repositoryName: "dev-docs",
        SHA1: routeFound.sha,
      })
    : null;

  res.status(200).json({ tree });
}
