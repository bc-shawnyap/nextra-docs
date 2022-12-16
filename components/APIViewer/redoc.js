import { RedocStandalone } from "redoc";

const RedocViewer = () => {
  return (
    <RedocStandalone
      spec={`https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/pages.v3.yml`}
      options={{
        nativeScrollbars: true,
        hideDownloadButton: true,
        disableSearch: true,
        theme: {
          sidebar: { width: "0px" },
        },
      }}
    />
  );
};

export default RedocViewer;
