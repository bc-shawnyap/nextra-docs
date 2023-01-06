import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";

const Links = ({ links }) => (
  <div
    className={clsx(
      "grid text-center items-center w-full border-t border-t-gray-200 dark:border-t-gray-500",
      links.length === 1 && "grid-cols-1",
      links.length === 2 && "grid-cols-2"
    )}
  >
    {links.map((link) => {
      const SVGIcon = link.icon;
      return (
        <NextLink
          className="p-3 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-300 dark:hover:text-blue-700 text-sm uppercase"
          href={link.href}
          aria-label="Read more about this tool"
        >
          {SVGIcon ? (
            <SVGIcon className="mx-auto text-base" />
          ) : link.label ? (
            <span>{link.label}</span>
          ) : (
            <span>Docs</span>
          )}
        </NextLink>
      );
    })}
  </div>
);

const IconCard = ({
  type,
  title = "API Client",
  subtitle = "Python",
  links,
  icon: { url },
}) => {
  return (
    <div className="relative col-span-12 sm:col-span-4 lg:col-span-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 flex flex-col transition text-slate-700 dark:bg-slate-700 dark:text-slate-200">
      <div className="flex flex-col flex-1 justify-between gap-4 p-5">
        <div className="flex w-[50px] mx-auto dark:bg-slate-100">
          <Image
            className="w-full h-auto m-auto aspect-square"
            height={0}
            width={0}
            sizes="100vw"
            alt={url}
            src={`https://storage.googleapis.com/bigcommerce-production-dev-center/images${url}`}
          />
        </div>
        <div className="mx-auto text-center">
          {type && (
            <span
              className={clsx(
                "inline-block text-xs px-3 py-1 rounded uppercase font-bold",
                type === "beta" && "text-blue-600 dark:text-blue-300",
                type === "community" && "text-orange-600 dark:text-orange-300"
              )}
            >
              {type}
            </span>
          )}
          <h5 className="font-bold text-sm">{title}</h5>
          <span className="text-sm uppercase">{subtitle}</span>
        </div>
      </div>
      <Links links={links} />
    </div>
  );
};

export default IconCard;
