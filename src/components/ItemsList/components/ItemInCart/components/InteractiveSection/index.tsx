import THEME from "../../../../../../config/theme"
import { ProductInCart } from "../../../../../../entity/product.types"
import Chip from "../../../../../generals/Chip"
import Typography from "../../../../../generals/Typography"
import ProductCounter from "./components/ProductCounter"

interface Props extends Pick<ProductInCart, "quantity" | "price"> {
}

const InteractiveSection = (props: Props) => {

    return (
        <div className="grid grid-row-2">
            <Chip color={THEME.colors.primary.bg} center={true}>
                <Typography.Normal className="mx-6 p-1.5" color={THEME.colors.white.text} bold={true}  >
                    ${props.price}
                </Typography.Normal>
            </Chip>
            <ProductCounter initialCounter={props.quantity}/>
        </div>
    )
}

export default InteractiveSection