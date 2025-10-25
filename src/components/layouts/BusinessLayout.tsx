import { type ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const BusinessLayout = ({ children }: Props) => {
  return (
    <div className="business">
      <Header />
      <section className="business__body">{children}</section>
      <Footer />
    </div>
  );
};

export default BusinessLayout;
