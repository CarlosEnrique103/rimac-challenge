import {
  ForMeIcon,
  RadioCheckedIcon,
  RadioUncheckedIcon,
  SomeoneElseIcon,
} from "@/icons";
import { ReactNode } from "react";

type Props = {
  variant?: ServiceType;
  selected?: boolean;
  onSelect?: (variant: ServiceType) => void;
};

type ServiceInfo = {
  icon: ReactNode;
  title: string;
  description: string;
};

const services: Record<ServiceType, ServiceInfo> = {
  personal: {
    icon: <ForMeIcon />,
    title: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
  },
  "someone-else": {
    icon: <SomeoneElseIcon />,
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
  },
};

const ServiceTypeCard = ({
  variant = "personal",
  selected,
  onSelect,
}: Props) => {
  const { icon, title, description } = services[variant];

  const handleClick = () => onSelect?.(variant);

  return (
    <article className="card__service">
      <div className="card__service--title">
        <span>{icon}</span>
        <h1 className="text--headline-black-sm">{title}</h1>
      </div>
      <p className="text--paragraph-sm">{description}</p>

      <div className="card__radio-group" onClick={handleClick}>
        {selected && <RadioCheckedIcon />}
        {!selected && <RadioUncheckedIcon />}
      </div>
    </article>
  );
};

export default ServiceTypeCard;
