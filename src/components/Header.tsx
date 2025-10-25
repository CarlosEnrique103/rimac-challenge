import { LogoIcon, TelephoneIcon } from "@/icons";

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <LogoIcon />
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
export default Header;
