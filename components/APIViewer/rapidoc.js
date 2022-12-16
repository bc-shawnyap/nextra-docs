import { useTheme } from "nextra-theme-docs";
import { useEffect } from "react";

const RapidocViewer = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    import("rapidoc");
  }, []);

  return (
    <rapi-doc
      spec-url="https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/pages.v3.yml"
      render-style="view"
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
    />
  );
};

export default RapidocViewer;
