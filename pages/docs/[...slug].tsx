import type { GetStaticPaths, GetStaticProps } from "next";

import { getLayout } from "@components/Layouts/SidebarLayout";
import SidebarTreeView from "@components/Sidebar/SidebarTreeView";

import { getGithubRepoContents } from "lib/github";
import { useEffect } from "react";
import { useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import MDX from "@components/MDX";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkComment from "remark-comment";

const options = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const getSidebarTree = async (slug: string) => {
  const response = await fetch(`/api/github?slug=${slug}`);
  const treeJSON = await response.json();

  return treeJSON;
};

const DocsPages = ({ contents, slugs }) => {
  const [sidebarTree, setSidebarTree] = useState(null);

  useEffect(() => {
    getSidebarTree(slugs[0]).then(({ tree }) => {
      setSidebarTree(tree);
    });
  }, []);

  return (
    <>
      {getSidebarTree && (
        <SidebarTreeView basePath={slugs[0]} items={sidebarTree} />
      )}
      <MDX source={contents.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const contents = await getGithubRepoContents({
      repositoryName: "dev-docs",
      path: "docs",
    });

    const paths = contents.map((content) => ({
      params: {
        slug: [content.path],
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

DocsPages.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const slugs = Array.isArray(slug) ? slug : [slug];
  const paths = slugs.join("/");

  const contents = await getGithubRepoContents({
    repositoryName: "dev-docs",
    path: `docs/${paths}`,
  });

  if (!contents) {
    return {
      redirect: {
        destination: "docs",
        permanent: false,
        statusCode: 404,
      },
    };
  }

  if (!Array.isArray(contents) && contents?.content) {
    contents.content = await serialize(
      Buffer.from(contents.content, "base64").toString(),
      {
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, options]],
          remarkPlugins: [remarkGfm, remarkComment],
        },
      }
    );
  }

  return {
    props: {
      contents: contents,
      slugs,
    },
  };
};

export default DocsPages;
