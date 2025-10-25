import { type ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface HomeLayout {
  children: ReactNode;
}

const HomeLayout = async ({ children }: HomeLayout) => {
  return (
    <div className="home">
      <Header />
      <section className="home__body">{children}</section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
