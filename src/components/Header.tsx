"use client";
import { LogoIcon, TelephoneIcon } from "@/icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="wrapper">
        <LogoIcon onClick={() => router.push("/")} />
        <div className="wrapper-info">
          <span className="buy-header">¡Compra por este medio!</span>
          <div>
            <TelephoneIcon />
            <span className="text--comp-lg-bold">(01) 411 6001</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
