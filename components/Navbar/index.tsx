import Logo from "@components/shared/Logo";
import CustomThemeSwitch from "@components/Switch/CustomThemeSwitch";

export default function Navbar() {
  return (
    <div className="p-4 w-full dark:text-white dark:bg-black">
      <nav className="flex w-full items-center">
        <div className="flex">
          <Logo />
        </div>
        <div className="ml-auto">
          <CustomThemeSwitch />
        </div>
      </nav>
    </div>
  );
}
