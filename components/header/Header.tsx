import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <>
      <header className="glassy absolute left-3 right-3 top-2 z-50 rounded-bl-xl rounded-tr-xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">LOGO | NAME</h1>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            </ul>
          </nav>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
      {/* for spacing */}
      <div className="h-[13vh] w-[96%]" />
    </>
  );
};

export default Header;
