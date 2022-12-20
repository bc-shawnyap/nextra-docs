import path from "path";
import { readdirSync, readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

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
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [remarkGfm],
    },
  });

  return mdxSource;
};
