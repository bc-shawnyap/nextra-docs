import "nextra-theme-docs/style.css";
import "@styles/global.scss";
import "@styles/tailwind.scss"

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
