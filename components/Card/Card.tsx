import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link className="col-span-12 md:col-span-6" href={href}>
      <div className="relative h-full group cursor-pointer overflow-hidden border rounded-lg text-left border-scale-500 hover:border-scale-700  dark:bg-scale-300 transition">
        <div className="px-8 py-8 relative flex flex-col h-full gap-6">
          <div className="flex items-center gap-3">
            <h5 className="text-base font-bold">{title}</h5>
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
