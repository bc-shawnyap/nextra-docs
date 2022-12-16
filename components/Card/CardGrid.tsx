export default function CardGrid({ children }) {
  return <div className="grid grid-cols-12 gap-6 not-prose my-8">{children}</div>;
}
