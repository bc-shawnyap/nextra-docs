import { getLayout as getSiteLayout } from "./SiteLayout";

import type { ComponentWithChildProp } from "types/global";

type BlogLayoutProps = {
  hideFooter?: boolean;
};

export default function BlogLayout({
  children,
}: ComponentWithChildProp<BlogLayoutProps>) {
  return <main>{children}</main>;
}

export const getLayout = (page: any) =>
  getSiteLayout(<BlogLayout>{page}</BlogLayout>);
