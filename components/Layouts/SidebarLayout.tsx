import { getLayout as getSiteLayout } from "./SiteLayout";

import type { ComponentWithChildProp } from "types/global";

type SidebarLayoutProps = {
  hideFooter?: boolean;
};

export default function SidebarLayout({
  children,
}: ComponentWithChildProp<SidebarLayoutProps>) {
  return <main className="grid grid-cols-2">{children}</main>;
}

export const getLayout = (page: any) =>
  getSiteLayout(<SidebarLayout>{page}</SidebarLayout>);
