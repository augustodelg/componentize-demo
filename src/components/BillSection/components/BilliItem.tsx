import { BillItem } from "../../../entity/billi.type"
import Typography from "../../generals/Typography"

interface Props extends BillItem {
    important?: boolean
}

const BilliItem = (props : Props) => {
    return (
        <div className="flex justify-between">
            <Typography.Normal bold={true}>
                {props.subject}
            </Typography.Normal>
            <Typography.Normal bold={props.important}>
                ${props.amount}
            </Typography.Normal>
        </div>
    )
}

export default BilliItem