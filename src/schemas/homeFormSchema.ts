import { z } from "zod";

export const homeFormSchema = z.object({
  document: z.string().min(8, "DNI es requerido"),
  phone: z
    .string()
    .min(6, "El número de celular debe tener un mínimo de 6 dígitos")
    .max(15, "El número de celular debe tener un máximo de 15 dígitos")
    .regex(/^[0-9]+$/, "El número de celular solo puede contener números"),
  policyPrivacy: z.boolean(),
  policyCommercial: z.boolean(),
  // terms: z.boolean(),
});
