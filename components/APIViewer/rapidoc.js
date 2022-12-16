import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

const RapidocViewer = ({ renderStyle = "view" }) => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    import("rapidoc").then(() => {
      setComponentLoaded(true);
    });
  }, []);

  return (
    componentLoaded && (
      <rapi-doc
        spec-url="https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/pages.v3.yml"
        render-style={renderStyle}
        font-size="large"
        class="bg-white"
        show-header="false"
        allow-search="false"
        allow-advanced-search="false"
        theme={resolvedTheme}
        // onLoaded={() => {
        //   const hash = window.location.hash
        //   if (hash !== '') {
        //     scroller.scrollTo(hash.slice(1), { offset: -100 })
        //   }
        // }}
        suppressHydrationWarning
      />
    )
  );
};

export default RapidocViewer;
