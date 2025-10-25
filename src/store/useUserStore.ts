import { create } from "zustand";

interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface UserData {
  serviceType: "personal" | "someone-else";
  selectedPlan: Plan | null;
  document?: string;
  phone?: string;
  policyPrivacy?: boolean;
  policyCommercial?: boolean;
  birthDate: string;
  name: string;
  lastName: string;
}

interface UserStore {
  userData: UserData;
  setServiceType: (serviceType: "personal" | "someone-else") => void;
  setSelectedPlan: (plan: Plan) => void;
  setFormData: (formData: Partial<UserData>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: {
    serviceType: "personal",
    selectedPlan: null,
    document: "",
    phone: "",
    policyPrivacy: false,
    policyCommercial: false,
    birthDate: "",
    name: "",
    lastName: "",
  },
  setServiceType: (serviceType) =>
    set((state) => ({
      userData: { ...state.userData, serviceType },
    })),
  setSelectedPlan: (plan) =>
    set((state) => ({
      userData: { ...state.userData, selectedPlan: plan },
    })),
  setFormData: (formData) =>
    set((state) => ({
      userData: { ...state.userData, ...formData },
    })),
}));
