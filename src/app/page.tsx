import HomeForm from "@/components/HomeForm";
import HomeLayout from "@/components/layouts/HomeLayout";
import Image from "next/image";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="home-header">
        <div className="home-header-content">
          <span className="text--heading-primary-tag">
            Seguro Salud Flexible
          </span>
          <h1 className="text--heading-primary-main">
            Creado para ti y tu familia
          </h1>
          <div className="home-header-desktop">
            <p className="text--heading-primary-sub">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </p>
            <HomeForm />
          </div>
        </div>
        <Image
          src="/images/family.png"
          alt="Family"
          width={480}
          height={560}
          priority
          quality={100}
        />
      </div>

      <div className="home-header-mobile">
        <p className="text--heading-primary-sub">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online.
        </p>
        <HomeForm />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
