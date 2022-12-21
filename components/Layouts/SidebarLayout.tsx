import { getLayout as getSiteLayout } from "./SiteLayout";

import type { ComponentWithChildProp } from "types/global";

type SidebarLayoutProps = {
  hideFooter?: boolean;
};

export default function SidebarLayout({
  children,
}: ComponentWithChildProp<SidebarLayoutProps>) {
  return <div className="grid grid-cols-[300px_1fr] w-full">{children}</div>;
}

export const getLayout = (page: any) =>
  getSiteLayout(<SidebarLayout>{page}</SidebarLayout>);
