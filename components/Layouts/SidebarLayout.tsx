import { getLayout as getSiteLayout } from "./SiteLayout";

import type { ComponentWithChildProp } from "types/global";
import Footer from "@components/Footer";

type SidebarLayoutProps = {
  hideFooter?: boolean;
};

export const Aside = ({ children }) => (
  <aside className="bg-slate-100 dark:bg-slate-800 dark:text-white p-4 overflow-auto h-[calc(100vh-67px)]">
    {children}
  </aside>
);
export const Content = ({ children }) => (
  <section className="h-[calc(100vh-67px)] overflow-auto flex flex-col gap-4">
    {children}
    <Footer />
  </section>
);

export default function SidebarLayout({
  children,
}: ComponentWithChildProp<SidebarLayoutProps>) {
  return (
    <div className="grid grid-cols-[300px_1fr] w-full h-[calc(100vh-67px)] overflow-hidden">
      {children}
    </div>
  );
}

export const getLayout = (page: any) =>
  getSiteLayout(<SidebarLayout>{page}</SidebarLayout>);
