import { PropsWithChildren } from "react";
import Typography, { ITypography } from "..";
import THEME from "../../../../config/theme";

interface Props extends Pick<ITypography, "className" | "color"> {
  bold?: boolean;
}

const Normal = (props: PropsWithChildren<Props>) => {
  const bold = props.bold ? "font-bold" : "font-regular";

  return (
    <Typography
      size={THEME.fonts.size.body}
      weight={bold}
      color={props.color}
      className={props.className}
    >
      {props.children}
    </Typography>
  );
};

export default Normal;
