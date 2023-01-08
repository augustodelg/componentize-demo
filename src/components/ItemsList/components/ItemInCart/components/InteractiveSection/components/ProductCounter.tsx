import THEME from "../../../../../../../config/theme";
import Button from "../../../../../../generals/Button";
import Chip from "../../../../../../generals/Chip";
import Image from "../../../../../../generals/Image";
import Typography from "../../../../../../generals/Typography";
import lessIcon from "../../../../../../../assets/icons/less.svg";
import plusIcon from "../../../../../../../assets/icons/plus.svg";
import { useState } from "react";

interface Props {
  initialCounter: number;
}

const ProductCounter = (props: Props) => {
  const [cant, setCant] = useState(props.initialCounter);

  const handleLess = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  const handlePlus = () => {
    setCant(cant + 1);
  };

  return (
    <Chip color={THEME.colors.secondary.bg} center={true}>
      <div className="grid grid-cols-3">
        <Button.Round
          onClick={handleLess}
          className="m-1"
          color={THEME.colors.white.bg}
        >
          <Image size="w-3/6" center={true} src={lessIcon} />
        </Button.Round>
        <Typography.Normal
          className="mx-auto p-1"
          color={THEME.colors.white.text}
          bold={true}
        >
          {cant}
        </Typography.Normal>
        <Button.Round
          onClick={handlePlus}
          className="m-1"
          color={THEME.colors.white.bg}
        >
          <Image size="w-3/6" center={true} src={plusIcon} />
        </Button.Round>
      </div>
    </Chip>
  );
};
export default ProductCounter;
