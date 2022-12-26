import THEME from "../../../../../../config/theme"
import { ProductInCart } from "../../../../../../entity/product.types"
import Image from "../../../../../generals/Image"
import Typography from "../../../../../generals/Typography"
import TextInformation from "./components/TextInformation"

interface Props extends Pick<ProductInCart, "name" | "description" | "image"> {
}


const InformationSection = (props: Props) => {

    return (
        <div className="grid lg:grid-cols-3 grid-cols-3 ">
            <div className="col-span-1 mx-auto my-auto">
                <Image src={props.image} center={true} size="w-3/6" />
            </div>
            <div className="col-span-2">
            <TextInformation description={props.description} name={props.name} />
            </div>
        </div>


    )
}

export default InformationSection