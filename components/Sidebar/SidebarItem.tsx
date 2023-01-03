import Link, { LinkProps } from "next/link";
import { memo } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import type { ComponentWithChildProp } from "types/global";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const depthIndent = {
  0: "",
  1: "pl-2 ml-2",
  2: "pl-4 ml-4",
  3: "pl-4 ml-8",
  4: "pl-4 ml-9",
};

const ActiveLink = memo(
  ({
    children,
    activeClassName,
    className,
    ...props
  }: ComponentWithChildProp<ActiveLinkProps>) => {
    const { asPath } = useRouter();
    const isActivePath = asPath === props.href;

    return (
      <Link className={isActivePath ? activeClassName : className} {...props}>
        {children}
      </Link>
    );
  }
);

const SidebarItem = ({ isParent, label, href, depth = 0 }) => (
  <li
    className={clsx(
      depthIndent[depth],
      depth > 1 && "border-l border-l-white",
      "pb-2"
    )}
  >
    {isParent ? (
      <span className="inline-block font-bold capitalize">{label}</span>
    ) : (
      <ActiveLink
        activeClassName="font-bold text-blue-500"
        href={href}
        prefetch={false}
      >
        {label}
      </ActiveLink>
    )}
  </li>
);

export default SidebarItem;
