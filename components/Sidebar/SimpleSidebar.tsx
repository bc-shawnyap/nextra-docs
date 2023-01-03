import Link from "next/link";

type Item = {
  name: string;
  path: string;
};

interface SidebarProps {
  items: Item[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 dark:text-white p-4">
      <ul className="flex flex-col gap-2">
        {items?.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
