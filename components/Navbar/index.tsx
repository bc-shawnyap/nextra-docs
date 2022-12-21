import Logo from "@components/shared/Logo";
import CustomThemeSwitch from "@components/Switch/CustomThemeSwitch";

export default function Navbar() {
  return (
    <div className="py-4 w-full dark:text-white dark:bg-black">
      <nav className="flex w-full">
        <div className="flex">
          <Logo />
        </div>
        <div className="ml-auto px-4">
          <CustomThemeSwitch />
        </div>
      </nav>
    </div>
  );
}
