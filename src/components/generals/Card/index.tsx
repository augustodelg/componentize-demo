import { PropsWithChildren } from "react";
import THEME from "../../../config/theme";

interface Props {
  color?: string;
}

// Also variants of the card could be made, for example VerticalCard, HorizontalCard, etc.
const Card = (props: PropsWithChildren<Props>) => {
  const color = props.color ? props.color : THEME.colors.white.bg;

  return <div className={`${color} rounded-3xl`}>{props.children}</div>;
};

export default Card;
