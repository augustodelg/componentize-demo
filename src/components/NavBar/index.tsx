import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import DropDownIcon from "../../assets/icons/drop-down.svg"
import BellIcon from "../../assets/icons/bell.svg"
import THEME from "../../config/theme"
import Chip from "../generals/Chip"
import Image from "../generals/Image"
import Typography from "../generals/Typography"
import Button from "../generals/Button"
const NavBar = () => {
    return (
        <div className="grid grid-cols-3">
            <Image src={ArrowLeftIcon} />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <Chip color={THEME.colors.white.bg} center={true} >
                        <div className="grid grid-cols-2 items-center mx-6 my-1">
                            <Image size="w-3/6" src={DropDownIcon} />
                            <Typography.Normal className="ml-2 " color={THEME.colors.grayDeep.text} bold={true}>
                                Job
                            </Typography.Normal>
                        </div>
                    </Chip>
                </div>

                <Button.Round className="m-1" color={THEME.colors.white.bg} >
                    <div className='ml-2.5'>
                        <Image size="w-3/6" src={BellIcon} />
                    </div>
                </Button.Round>
            </div>

        </div >
    )
}
export default NavBar