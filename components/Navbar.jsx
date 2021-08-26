import Link from "next/link";
const Navbar = () => {
  return (
    <nav
      className={
        "h-[4.5rem] fixed z-10 backdrop-blur-lg w-full saturate-150 bg-gray-900 bg-opacity-80"
      }
    >
      <div className={"w-full px-16 h-full"}>
        <div
          className={
            "max-w-5xl w-full mx-auto flex items-center justify-between h-full"
          }
        >
          <Link href={"/"}>
            <a className={"text-white font-bold"}>Algirlithm</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
