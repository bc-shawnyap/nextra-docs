import Heading from "@components/Headings";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

const components = {
  h1: (props) => <Heading variant="h1" {...props} />,
  h2: (props) => <Heading variant="h2" {...props} />,
  h3: (props) => <Heading variant="h3" {...props} />,
  h4: (props) => <Heading variant="h4" {...props} />,
  h5: (props) => <Heading variant="h5" {...props} />,
  h6: (props) => <Heading variant="h6" {...props} />,
  a: (props) => <Link {...props} />,
  img: (props) => (
    <Image
      className="w-full h-auto"
      height={0}
      width={0}
      sizes="100vw"
      {...props}
    />
  ),
};

export default function MDX({ source }) {
  if (!source) return null;

  return (
    <article className="mx-auto prose lg:prose-xl dark:prose-invert px-6 lg:px-4 py-4">
      <MDXRemote {...source} components={components} />
    </article>
  );
}
