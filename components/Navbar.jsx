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
            "max-w-4xl w-full mx-auto flex items-center justify-between h-full text-white font-bold"
          }
        >
          <div>
            <Link href={"/"}>
              <a>alGIRLithm</a>
            </Link>
          </div>
          <div className={"font-medium"}>
            <Link href={"/logistics"}>
              <a>logistics</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
