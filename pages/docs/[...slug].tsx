import type { GetStaticPaths, GetStaticProps } from "next";

import { Aside, Content, getLayout } from "@components/Layouts/SidebarLayout";
import SidebarTreeView from "@components/Sidebar/SidebarTreeView";

import { getRepoContentsWithOctokit } from "lib/github";
import { useEffect } from "react";
import { useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import MDX from "@components/MDX";
import remarkGfm from "remark-gfm";
import remarkComment from "remark-comment";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h, s } from "hastscript";
import Footer from "@components/Footer";

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
      <Aside>
        <SidebarTreeView
          basePath={`/docs${slugs?.[0] ? `/${slugs[0]}` : ""}`}
          items={sidebarTree}
        />
      </Aside>
      <Content>
        <MDX source={contents.content} />
      </Content>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: contents } = await getRepoContentsWithOctokit("docs");

    let paths = Array.isArray(contents)
      ? contents.map?.((content) => ({
          params: {
            slug: [content.name],
          },
        }))
      : [{ params: { slug: ["api-docs"] } }];

    return {
      paths: paths,
      fallback: "blocking",
    };
  } catch (error) {
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

  const { data: contents } = await getRepoContentsWithOctokit(`docs/${paths}`);

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
    const pattern = /(\{\{([^}]*)\}\})/g;

    contents.content = await serialize(
      Buffer.from(contents.content, "base64").toString(),
      {
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "append",
                properties: {
                  class: "ml-2",
                  ariaHidden: true,
                  tabIndex: -1,
                },
                content: [
                  // h("span.invisible", " permalink"),
                  s(
                    "svg.inline-block.invisible.group-hover:visible",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: 24,
                      height: 24,
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    s("path", {
                      d: "M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z",
                    })
                  ),
                ],
              },
            ],
          ],
          remarkPlugins: [remarkGfm, remarkComment],
          format: "mdx",
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
