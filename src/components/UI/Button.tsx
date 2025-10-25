import ActiveIndicator from "./ActiveIndicator";

type ButtonVariant = "primary" | "secondary";

type ButtonType = "button" | "submit" | "reset";

type Props = {
  onClick: () => void;
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  type?: ButtonType;
};

const Button = ({
  onClick,
  title,
  variant = "primary",
  disabled = false,
  isLoading = false,
  type = "button",
}: Props) => {
  const classes = `btn btn__${variant}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {isLoading && <ActiveIndicator />}
      {!isLoading && <a>{title}</a>}
    </button>
  );
};

export default Button;
