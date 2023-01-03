import SidebarItem from "./SidebarItem";

const SidebarItems = ({ item, basePath }) => (
  <>
    <SidebarItem
      isParent={item.type === "tree"}
      label={item.label}
      href={`${basePath ?? ""}/${item.path}`}
      depth={item.depth}
    />

    {item.children?.length > 0 &&
      item.children.map((node) => (
        <SidebarItems key={node.path} item={node} basePath={basePath} />
      ))}
  </>
);

export default SidebarItems;
