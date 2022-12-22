import { Fragment, PropsWithChildren } from "react"
import THEME from "../../../../../../config/theme"
import { ProductInCart } from "../../../../../../entity/product.types"
import Image from "../../../../../generals/Image"
import Typography from "../../../../../generals/Typography"

interface Props extends Pick<ProductInCart, "name" | "description" | "image"> {
}


const InformationSection = (props: Props) => {

    return (
        <div className="grid grid-cols-2 ">
            <Image src={props.image} center={true} size="w-2/6" />
            <div className="grid grid-row-2 my-5">
                <Typography size={THEME.fonts.size.body} color={THEME.colors.text.normal} weight='font-bold' >
                    {props.name}
                </Typography>
                <Typography size={THEME.fonts.size.small} color={THEME.colors.textLight.normal} weight='font-regular' >
                    {props.description}
                </Typography>
            </div>
        </div>


    )
}

export default InformationSection