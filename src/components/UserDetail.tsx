"use client";

import BackButton from "./UI/BackButton";
import { FamilyIcon } from "@/icons";
import { useUserStore } from "@/store/useUserStore";

const UserDetail = () => {
  const { userData } = useUserStore();

  return (
    <section className="user-detail">
      <BackButton />

      <h3 className="text--heading-primary-main">Resumen del seguro </h3>
      <section>
        <span>PRECIOS CALCULADOS PARA:</span>
        <div className="name">
          <FamilyIcon />
          <h4 className="text--headline-bold-sm">
            {userData.name} {userData.lastName}
          </h4>
        </div>

        <div className="responsible">
          <h5 className="text--headline-bold-sm">Responable de pago</h5>
          <span>DNI: {userData.document}</span>
          <span>Celular: {userData.phone}</span>
        </div>
        <div className="responsible">
          <h5 className="text--headline-bold-sm">Plan elegido</h5>
          <span>{userData.selectedPlan?.name}</span>
          <span>Costo del Plan: ${userData.selectedPlan?.price} al mes</span>
        </div>
      </section>
    </section>
  );
};

export default UserDetail;
