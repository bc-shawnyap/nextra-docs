import type { GetStaticProps } from "next";

import { getLayout } from "@components/Layouts/PrimaryLayout";

import { getGithubRepoContents, getGitTreeWithSHA1 } from "lib/github";
import CardGrid from "@components/Card/CardGrid";
import Card from "@components/Card/Card";

const GithubDocsIndexPage = ({ contents, tree }) => {
  return (
    <>
      <div className="container mx-auto">
        <CardGrid>
          {contents.map((content) => (
            <Card
              key={content.sha}
              title={content.name}
              href={`/${content.path}`}
              description="Dolore ut ad ut quis mollit cupidatat aliqua."
            />
          ))}
        </CardGrid>
      </div>
    </>
  );
};

GithubDocsIndexPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getGithubRepoContents({
    repositoryName: "dev-docs",
    path: "docs",
  });

  // const { tree } = await getGitTreeWithSHA1({
  //   repositoryName: "dev-docs",
  //   SHA1: contents.sha,
  // });

  return {
    props: {
      contents,
      tree: null,
    },
  };
};

export default GithubDocsIndexPage;
