"use client";
import { useState } from "react";
import { z } from "zod";

import Button from "./UI/Button";
import { homeFormSchema } from "@/schemas/homeFormSchema";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { client } from "@/core/api/client";
import { BASE_URL_USERS } from "@/const/url";
import { useStepsStore } from "@/store/useStepsStore";

interface FormState {
  document: string;
  phone: string;
  policyPrivacy: boolean;
  policyCommercial: boolean;
}

const HomeForm = () => {
  const router = useRouter();

  const { setFormData: updateDataUser } = useUserStore();
  const { goToStep } = useStepsStore();

  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    document: "30216147",
    phone: "30216147",
    policyPrivacy: false,
    policyCommercial: false,
  });

  const [errors, setErrors] = useState({
    document: "",
    phone: "",
    policyPrivacy: false,
    policyCommercial: false,
  });

  const validateForm = (updatedData: FormState) => {
    try {
      homeFormSchema.parse(updatedData);
      setIsFormValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsFormValid(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => {
      const updatedData = { ...prev, [name]: fieldValue };

      try {
        homeFormSchema.shape[name as keyof FormState].parse(fieldValue);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error.issues[0].message,
          }));
        }
      }

      validateForm(updatedData);

      return updatedData;
    });
  };

  const handleSubmit = async () => {
    if (!isFormValid) {
      console.log({ errors });
      return;
    }

    try {
      const { data: user } = await client.get(BASE_URL_USERS);
      goToStep(1);
      updateDataUser({
        ...formData,
        name: user?.name,
        lastName: user?.lastName,
        birthDate: user?.birthDay,
        selectedPlan: null,
      });
    } catch (error) {
      console.log(error);
    }

    router.push("/business");
  };

  return (
    <form className="form">
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Nro. de document"
          name="document"
          id="document"
          required
          onChange={handleInputChange}
          value={formData.document}
        />
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Celular"
          name="phone"
          id="phone"
          required
          onChange={handleInputChange}
          value={formData.phone}
        />
      </div>
      <div className="form__group">
        <input
          type="checkbox"
          id="policyPrivacy"
          name="policyPrivacy"
          required
          checked={formData.policyPrivacy}
          onChange={handleInputChange}
        />{" "}
        <label htmlFor="policyPrivacy" className="text--body-md">
          Acepto lo Política de Privacidad
        </label>
      </div>
      <div className="form__group">
        <input
          type="checkbox"
          id="policyCommercial"
          name="policyCommercial"
          required
          checked={formData.policyCommercial}
          onChange={handleInputChange}
        />{" "}
        <label htmlFor="policyCommercial" className="text--body-md">
          Acepto la Política Comunicaciones Comerciales
        </label>
      </div>
      <span className="text--body-link ">Aplican Términos y Condiciones.</span>
      <Button variant="primary" onClick={handleSubmit} title="Cotiza aquí" />
    </form>
  );
};

export default HomeForm;
