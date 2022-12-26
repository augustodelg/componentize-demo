import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import DropDownIcon from "../../assets/icons/drop-down.svg"
import THEME from "../../config/theme"
import Chip from "../generals/Chip"
import Image from "../generals/Image"
import Typography from "../generals/Typography"

const NavBar = () => {
    return (
        <div className="grid grid-cols-3">
            <Image src={ArrowLeftIcon} />
            <div className="grid grid-cols-3">
                <div className="col-span-4">
                    <Chip color={THEME.colors.white.bg} center={true} >
                        <div className="grid grid-cols-3 items-center mx-6 py-1">
                            <Image size="w-3/6" src={DropDownIcon} />
                            <Typography.Normal className="ml-2 col-span-2" color={THEME.colors.grayDeep.text} bold={true}>
                                Job
                            </Typography.Normal>
                        </div>
                    </Chip>
                </div>
            </div>
        </div >
    )
}
export default NavBar