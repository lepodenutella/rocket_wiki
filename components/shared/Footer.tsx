import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#d1d5db]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo_last.png"
            width={100}
            height={40}
            alt="Evently logo"
          />
        </Link>

        <p>2024 Rocket Wikipedia.</p>
      </div>
    </footer>
  );
};

export default Footer;
