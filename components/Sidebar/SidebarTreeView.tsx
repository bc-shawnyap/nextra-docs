import Link from "next/link";
type Item = {
  path: string;
  url: string;
  type: string;
};

interface SidebarTreeViewProps {
  items: Item[];
  onlyType?: "tree" | "blob";
  basePath?: string;
}

const treeify = (items) => {
  items.forEach((item) => {
    item.split("/").reduce((a, path) => {}, []);
  });
};

export default function SidebarTreeView({
  items,
  basePath,
  onlyType,
}: SidebarTreeViewProps) {
  if (onlyType) {
    items = items.filter((item) => item.type === onlyType);
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800 dark:text-white p-4">
      <ul className="flex flex-col gap-2">
        {items?.map((item) => (
          <li key={item.path}>
            {item.type === "tree" ? (
              <>
                <span className="inline-block font-bold capitalize">
                  {item.path}
                </span>
                <hr />
              </>
            ) : (
              <Link href={`${basePath ?? ""}/${item.path}`} prefetch={false}>
                {item.path.split("/").pop()}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
