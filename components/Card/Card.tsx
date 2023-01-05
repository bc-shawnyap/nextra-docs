import Link from "next/link";

type CardVariants = "small" | "large" | "default";

interface CardProps {
  title: string;
  description: string;
  href: string;
  variant?: CardVariants;
}

const cardVariants = {
  small: "col-span-12 md:col-span-4",
  large: "col-span-12",
  default: "col-span-12 md:col-span-6",
} as const;

const hyphenRegex: RegExp = /-/g;

export default function Card({
  title,
  description,
  href,
  variant = "default",
}: CardProps) {
  return (
    <Link className={cardVariants[variant]} href={href}>
      <div className="relative h-full group cursor-pointer overflow-hidden border rounded-lg text-left border-slate-500 hover:border-slate-700 hover:shadow-lg dark:hover:shadow-none dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-600 transition">
        <div className="px-8 py-8 relative flex flex-col h-full gap-6">
          <div className="flex items-center gap-3">
            <h5 className="text-sm font-bold uppercase">
              {title.replace(hyphenRegex, " ")}
            </h5>
          </div>
          <span>{description}</span>
          <span className="mt-auto text-[#0d52ff] dark:text-[#01ebdb]">
            Learn More
          </span>
        </div>
      </div>
    </Link>
  );
}
