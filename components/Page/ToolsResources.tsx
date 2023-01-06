import { Fragment, useId } from "react";
import CardGrid from "@components/Card/CardGrid";
import IconCard from "@components/Card/IconCard";

const ToolsResources = ({ data }) => {
  const id = useId();

  return (
    <div className="prose max-w-none dark:prose-invert my-4">
      {data.map((tools) => {
        const sectionId = String(tools.title)
          .toLowerCase()
          .replaceAll(" ", "-");
          
        const key = `${sectionId}-${id}`;

        return (
          <Fragment key={key}>
            <h2 id={sectionId}>{tools.title}</h2>
            <p>{tools.subtitle}</p>
            <CardGrid>
              {tools.children.map((tool) => (
                <IconCard
                  key={`${tool.title}_${tool.subtitle}`}
                  {...tool}
                  href={"/"}
                  icon={tool.icon}
                />
              ))}
            </CardGrid>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ToolsResources;
