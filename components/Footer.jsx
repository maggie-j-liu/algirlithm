import Link from "next/link";
const Footer = () => {
  return (
    <footer className={"bg-gray-900 text-white py-16 relative"}>
      <div
        className={
          "w-full max-w-5xl px-16 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8"
        }
      >
        <div>
          <h3 className={"font-bold text-xl"}>
            <Link href="/">
              <a>Algirlithm</a>
            </Link>
          </h3>
        </div>
        <div className={"space-y-2"}>
          <h3 className={"font-bold mb-4"}>Register</h3>
          <div>
            <a href="/" className={"footer-link"}>
              registration link
            </a>
          </div>
        </div>
        <div className={"space-y-2"}>
          <h3 className={"font-bold mb-4"}>Contact Us</h3>
          <div>
            <a href="mailto:contact@algirlithm.org" className={"footer-link"}>
              contact@algirlithm.org
            </a>
          </div>
        </div>
        <div className={"space-y-2"}>
          <h3 className={"font-bold mb-4"}>Quick Links</h3>
          <div>
            <a href="/logistics" className={"footer-link"}>
              logistics
            </a>
          </div>
          <div>
            <a href="/faq" className={"footer-link"}>
              faq
            </a>
          </div>
          <div>
            <a href="/about" className={"footer-link"}>
              about
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
