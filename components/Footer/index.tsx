export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black px-4 py-6 w-full text-white mt-auto">
      <span className="text-sm text-gray-200">
        ©{new Date().getFullYear()} BigCommerce Pty. Ltd. Shopping Cart Software
      </span>
    </footer>
  );
}
