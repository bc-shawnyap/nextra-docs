import type { NextApiRequest, NextApiResponse } from "next";

import { getRepoContentsWithOctokit, getTreeWithOctokit } from "lib/github";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { slug },
    method,
  } = req;
  if (method !== "GET") return res.status(400);
  try {
    const { data: contents } = await getRepoContentsWithOctokit("docs");
    const routeFound = contents?.find?.((content) => slug === content.name);

    if (!routeFound) {
      throw {
        status: 404,
        message: "Path not found",
      };
    }

    const response = await getTreeWithOctokit(routeFound.sha);

    return res.status(200).json({ tree: response.data.tree });
  } catch (error) {
    return res.status(error.status).json(error);
  }
}
