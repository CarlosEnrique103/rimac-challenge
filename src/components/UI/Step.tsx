import { useStepsStore } from "@/store/useStepsStore";

type Props = {
  number: number;
  active: boolean;
  completed: boolean;
  label: string;
};

const Step = ({ number, label, active, completed }: Props) => {
  const { goToStep } = useStepsStore();

  const handleClick = () => {
    goToStep(number);
  };

  return (
    <button
      onClick={handleClick}
      className={`stepContainer ${
        active ? "active" : completed ? "completed" : "inactive"
      }`}
    >
      <div className="stepNumber text--headline-bold-md">{number}</div>
      <div className="stepLabel text--headline-bold-md">{label}</div>
    </button>
  );
};

export default Step;
