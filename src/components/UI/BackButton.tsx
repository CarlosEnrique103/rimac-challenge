"use client";

import { useRouter } from "next/navigation";
import { BackIcon } from "@/icons";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <span color="primary" className="btn__back" onClick={handleGoBack}>
      <BackIcon />
      <span>Volver</span>
    </span>
  );
};
export default BackButton;
