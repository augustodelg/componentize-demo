import THEME from "../../../../../../../config/theme";
import Typography from "../../../../../../generals/Typography";

interface Props {
  name: string;
  description: string;
}

const TextInformation = (props: Props) => {
  return (
    <div className="grid grid-row-2 col-span-2 lg:col-span-1 my-5">
      <Typography.Subtitle2>{props.name}</Typography.Subtitle2>
      <Typography.Description
        className="truncate"
        color={THEME.colors.grayMedium.text}
      >
        {props.description}
      </Typography.Description>
    </div>
  );
};
export default TextInformation;
