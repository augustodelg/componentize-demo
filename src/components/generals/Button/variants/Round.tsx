import { PropsWithChildren } from "react";
import Button, { IButton } from "..";
import THEME from "../../../../config/theme";

const Round = (props: PropsWithChildren<IButton>) => {
  return (
    <Button
      color={props.color}
      className={`${props.className}
            ${THEME.components.button.size.auto} 
            ${THEME.components.button.rounded.full}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default Round;
