import type { PropsWithChildren } from "react";
import type { ComponentWithChildProp } from "types/global";

type SiteLayoutProps = {
  hideFooter?: boolean;
};

export default function SiteLayout({
  children,
}: ComponentWithChildProp<SiteLayoutProps>) {
  return (
    <>
      {/* Navbar */}
      {children}
      {/* Footer */}
    </>
  );
}

export const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
