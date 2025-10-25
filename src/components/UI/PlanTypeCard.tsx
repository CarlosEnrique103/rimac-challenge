import { ClinicIcon, HomeIcon } from "@/icons";
import { ReactNode } from "react";
import Button from "./Button";

type IconType = "home" | "clinic";

type Props = {
  variantIcon?: IconType;
  onSelect?: (variant: Plan) => void;
  plan: Plan;
};

const planIcons: Record<IconType, ReactNode> = {
  home: <HomeIcon />,
  clinic: <ClinicIcon />,
};

const PlanTypeCard = ({ onSelect, plan, variantIcon = "home" }: Props) => {
  const icon = planIcons[variantIcon];
  const handleClick = () => onSelect?.(plan);

  const { name, description, price } = plan;

  return (
    <article className="card__plan">
      <div className="card__plan-header">
        <div className="card__plan-header--title">
          <h2 className="text--headline-black-md">{name}</h2>
          <span className="text--headline-upper-black-md ">COSTO DE PLAN</span>
          <span className="text--headline-black-sm ">${price} al mes</span>
        </div>
        <span>{icon}</span>
      </div>
      <ul className="text--paragraph-sm">
        {description.map((option, index) => (
          <li key={index} className="text--paragraph-md-2">
            {(() => {
              const words = option.split(" ");
              const firstWord = words.shift();
              const rest = words.join(" ");
              return (
                <>
                  <span className="text--paragraph-md-bold">{firstWord} </span>{" "}
                  <span className="text--paragraph-md-2">{rest}</span>
                </>
              );
            })()}
          </li>
        ))}
      </ul>

      <Button
        onClick={handleClick}
        title="Seleccionar plan"
        variant="secondary"
      />
    </article>
  );
};

export default PlanTypeCard;
