import type { GetStaticProps } from "next";

import { MDXRemote } from "next-mdx-remote";

import { getDocBySlug } from "lib/docs";
import Heading from "@components/Headings";
import Link from "next/link";

const components = {
  h1: (props) => <Heading variant="h1" {...props} />,
  h2: (props) => <Heading variant="h2" {...props} />,
  h3: (props) => <Heading variant="h3" {...props} />,
  h4: (props) => <Heading variant="h4" {...props} />,
  h5: (props) => <Heading variant="h5" {...props} />,
  h6: (props) => <Heading variant="h6" {...props} />,
  a: (props) => <Link {...props} target="_blank" rel="noreferrer" />,
};

export default function ManualDocsPage({ source }) {
  return (
    <>
      <article className="mx-auto prose lg:prose-xl dark:prose-invert">
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxSource = await getDocBySlug(`about-our-api`);

  return {
    props: {
      source: mdxSource,
    },
  };
};
