import type { GetStaticProps } from "next";

import { MDXRemote } from "next-mdx-remote";

import { getDocBySlug } from "lib/docs";

export default function ManualDocsPage({ source }) {
  return (
    <>
      <article className="mx-auto prose lg:prose-xl">
        <MDXRemote {...source} />
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
