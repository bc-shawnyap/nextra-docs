import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import type { ComponentWithChildProp } from "types/global";

type SiteLayoutProps = {
  hideFooter?: boolean;
};

export default function SiteLayout({
  children,
}: ComponentWithChildProp<SiteLayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900">
      <Navbar />
      <main className="flex flex-grow">{children}</main>
    </div>
  );
}

export const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
