import THEME from "../../../../../../config/theme"
import { ProductInCart } from "../../../../../../entity/product.types"
import Button from "../../../../../generals/Button"
import Chip from "../../../../../generals/Chip"
import Image from "../../../../../generals/Image"
import Typography from "../../../../../generals/Typography"
import lessIcon from "../../../../../../assets/icons/less.svg"
import plusIcon from "../../../../../../assets/icons/plus.svg"

interface Props extends Pick<ProductInCart, "quantity" | "price"> {
}

const InteractiveSection = (props: Props) => {

    return (
        <div className="grid grid-row-2">
            <Chip color={THEME.colors.primary.bg} center={true}>
                <Typography.Normal className="mx-4 p-1.5" color={THEME.colors.white.text} bold={true}  >
                    ${props.price}
                </Typography.Normal>
            </Chip>

            <Chip color={THEME.colors.secondary.bg} center={true}>
                <div className="grid grid-cols-3">
                    <Button.Round className="m-1" color={THEME.colors.white.bg} >
                        <Image size="w-3/6" center={true} src={lessIcon} />
                    </Button.Round>
                    <Typography.Normal className="mx-auto p-1" color={THEME.colors.white.text} bold={true}>
                        {props.quantity}
                    </Typography.Normal>
                    <Button.Round className="m-1" color={THEME.colors.white.bg} >
                        <Image size="w-3/6" center={true} src={plusIcon} />
                    </Button.Round>

                </div>

            </Chip>
        </div>
    )
}

export default InteractiveSection