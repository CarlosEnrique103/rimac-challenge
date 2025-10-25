import { create } from "zustand";

type Step = {
  number: number;
  label: string;
  active: boolean;
  completed: boolean;
};

type StepsStore = {
  steps: Step[];
  currentStep: number;
  setActiveStep: (stepNumber: number) => void;
  completeStep: (stepNumber: number) => void;
  goToStep: (stepNumber: number) => void;
};

export const useStepsStore = create<StepsStore>((set) => ({
  steps: [
    { number: 1, label: "Planes y coberturas", active: true, completed: true },
    { number: 2, label: "Resumen", active: false, completed: false },
  ],
  currentStep: 1,

  setActiveStep: (stepNumber) =>
    set((state) => ({
      currentStep: stepNumber,
      steps: state.steps.map((s) => ({
        ...s,
        active: s.number === stepNumber,
      })),
    })),

  completeStep: (stepNumber) =>
    set((state) => ({
      steps: state.steps.map((s) =>
        s.number === stepNumber ? { ...s, completed: true } : s
      ),
    })),

  goToStep: (stepNumber) =>
    set((state) => ({
      currentStep: stepNumber,
      steps: state.steps.map((s) => ({
        ...s,
        active: s.number === stepNumber,
      })),
    })),
}));
