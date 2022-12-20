import { getLayout as getSiteLayout } from "./SiteLayout";

import type { ReactNode } from "react";
import type { ComponentWithChildProp } from "types/global";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

type PrimaryLayoutProps = {
  hideFooter?: boolean;
};

export default function PrimaryLayout({
  children,
}: ComponentWithChildProp<PrimaryLayoutProps>) {
  return (
    <>
      <Navbar />
      <main className="py-8 my-8">{children}</main>
      <Footer />
    </>
  );
}

export const getLayout = (page: ReactNode) =>
  getSiteLayout(<PrimaryLayout>{page}</PrimaryLayout>);
