import path from "path";
import { readdirSync, readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { rehypePrettyCodeOptions } from "./rehypePrettyCode";

export const getAllDocsIds = () => {
  const docPath = path.resolve(process.cwd(), "docs");
  const files = readdirSync(docPath);

  return files;
};

export const getDocBySlug = async (slug: string) => {
  const filePath = path.join(
    process.cwd(),
    `docs`,
    `getting-started`,
    `${slug}.mdx`
  );

  const source = readFileSync(filePath, `utf-8`);

  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      remarkPlugins: [remarkGfm],
    },
  });

  return mdxSource;
};
