import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="bg-white text-black py-5 px-8 flex font-semibold z-20  justify-between shadow-md fixed w-full">
        <div>
          <Link href={"/"}>
            <img src="/image/adidas-svgrepo-com.svg" alt="Adidas Logo" width={50} />
          </Link>
        </div>
        <div className="gap-5 justify-center items-center  hidden md:flex">
          <Link href={"/about"}>
            <span>{locale === `fr` ? `environ` : `About`}</span>
          </Link>
          <Link href={"/contact-us"}>
            <span>Contact</span>
          </Link>
        </div>

        <div onClick={() => setShowNav(!showNav)} className="block md:hidden cursor-pointer">
          <img src="/image/hamburger-menu-mobile-svgrepo-com.svg" alt="hamburger" width={40} className="h-full" />
        </div>
      </div>

      {showNav && (
        <div className="shadow-md z-20 bg-white absolute top-[10%] right-0 w-[40%] md:hidden block">
          <div className="flex-col w-full p-3 h-full gap-3">
            <Link href={"/about"}>
              <h3 className="font-semibold py-2 border-b-[1px] border-slate-400 ">🧱 About</h3>
            </Link>
            <Link href={"/contact-us"}>
              <h3 className="font-semibold py-2">📞 Contact</h3>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
