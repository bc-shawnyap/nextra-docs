import Link from "next/link";
import { useRouter } from "next/router";

const variantMappings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

export type HeadingProps = {
  variant?: keyof typeof variantMappings;
  className?: string;
  children: React.ReactNode | string;
};

export default function Heading({
  variant,
  className,
  children,
  ...props
}: HeadingProps) {
  const { pathname } = useRouter();
  const Component = variant ? variantMappings[variant] : "p";

  const generatedId = children.toString().toLowerCase().split(" ").join("-");

  return (
    <Component className="group inline-block" id={generatedId} {...props}>
      {children}
      <Link
        className="opacity-0 inline-block ml-2 group-hover:opacity-100 no-underline transition-opacity"
        href={pathname + `#${generatedId}`}
      >
        <span className="text-inherit text-violet-400">#</span>
      </Link>
    </Component>
  );
}
