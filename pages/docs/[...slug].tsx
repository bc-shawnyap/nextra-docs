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
import { rehypePrettyCodeOptions } from "lib/rehypePrettyCode";

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
      <section className="my-4">
        <MDX source={contents.content} />
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const contents = await getGithubRepoContents({
      repositoryName: "dev-docs",
      path: "docs",
    });

    let paths = Array.isArray(contents)
      ? contents.map?.((content) => ({
          params: {
            slug: [content.path],
          },
        }))
      : [{ params: { slug: ["api-docs"] } }];

    return {
      paths: paths,
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
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
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
