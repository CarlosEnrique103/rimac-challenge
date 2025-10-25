import { LogoWhiteIcon, LogoWhiteMobileIcon } from "@/icons";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="wrapper-desktop-icon">
        <LogoWhiteIcon />
      </div>
      <div className="wrapper-mobile-icon">
        <LogoWhiteMobileIcon />
      </div>

      <span className="text--comp-mdr">© 2023 RIMAC Seguros y Reaseguros</span>
    </div>
  </footer>
);
export default Footer;
