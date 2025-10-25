import ActiveIndicator from "./ActiveIndicator";

type ButtonVariant = "primary" | "secondary";

type Props = {
  onClick: () => void;
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  onClick,
  title,
  variant = "primary",
  disabled = false,
  isLoading = false,
}: Props) => {
  const classes = `btn btn__${variant}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {isLoading && <ActiveIndicator />}
      {!isLoading && <span>{title}</span>}
    </button>
  );
};

export default Button;
