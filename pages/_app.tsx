import { Fragment } from "react";

import type { AppProps } from "next/app";
import type { Page } from "types/page";

import "nextra-theme-docs/style.css";
import "@styles/global.scss";
import "@styles/tailwind.scss";

type Props = AppProps & {
  Component: Page;
};

export default function Nextra({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
