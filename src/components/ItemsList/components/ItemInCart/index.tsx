import { Fragment, PropsWithChildren } from "react"
import THEME from "../../../../config/theme"
import { ProductInCart } from "../../../../entity/product.types"
import Card from "../../../generals/Card"
import Typography from "../../../generals/Typography"
import InformationSection from "./components/InformationSection"
import InteractiveSection from "./components/InteractiveSection"

interface Props {
    item: ProductInCart,
}

const ItemInCart = (props: Props) => {

    return (
        <Card color={THEME.colors.white.bg}>
            <div className="m-2 p-2 grid grid-cols-3 gap-1">
                <div className="col-span-2">
                    <InformationSection
                        description={props.item.description}
                        image={props.item.image}
                        name={props.item.name} />
                </div>

                <InteractiveSection price={props.item.price} quantity={props.item.quantity} />
            </div>

        </Card>
    )
}

export default ItemInCart