const headingMappings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

type HeadingVariants = keyof typeof headingMappings;

export type HeadingProps = {
  variant?: HeadingVariants;
  className?: string;
  children: React.ReactNode | string;
};

export default function Heading({
  variant,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = variant ? headingMappings[variant] : "p";

  return (
    <Component className="group" {...props}>
      {children}
    </Component>
  );
}
