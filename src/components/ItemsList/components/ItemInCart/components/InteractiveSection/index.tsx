import THEME from "../../../../../../config/theme"
import { ProductInCart } from "../../../../../../entity/product.types"
import Chip from "../../../../../generals/Chip"
import Typography from "../../../../../generals/Typography"

interface Props extends Pick<ProductInCart, "quantity" | "price"> {
}

const InteractiveSection = (props: Props) => {

    return (
        <div className="grid grid-row-2">
            <Chip color={THEME.colors.primary.bg} center={true}>
                <Typography className="mx-4 p-1.5" size={THEME.fonts.size.body} color={THEME.colors.white.text} weight='font-bold' >
                    ${props.price}
                </Typography>
            </Chip>

            <Chip color={THEME.colors.secondary.bg} center={true}>
                <Typography className="mx-5 p-1" size={THEME.fonts.size.body} color={THEME.colors.white.text} weight='font-bold' >
                   - {props.quantity} +
                </Typography>
            </Chip>
        </div>
    )
}

export default InteractiveSection