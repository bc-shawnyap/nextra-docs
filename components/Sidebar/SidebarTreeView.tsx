import { useMemo } from "react";

import SidebarItems from "./SidebarItems";

import { treeify } from "lib/treeify";

type Item = {
  path: string;
  url: string;
  type: string;
};

interface SidebarTreeViewProps {
  items: Item[];
  basePath?: string;
}

export default function SidebarTreeView({
  items,
  basePath,
}: SidebarTreeViewProps) {
  const treeItems: Item[] = useMemo(() => treeify(items), [items]);

  return (
    items && (
      <ul className="flex flex-col">
        {treeItems.map((item) => (
          <SidebarItems
            key={`${item.path}__${item.type}`}
            item={item}
            basePath={basePath}
          />
        ))}
      </ul>
    )
  );
}
