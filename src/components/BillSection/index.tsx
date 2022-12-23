import THEME from "../../config/theme"
import { Bill } from "../../entity/billi.type"
import Card from "../generals/Card"
import Typography from "../generals/Typography"
import BilliItem from "./components/BilliItem"

interface Props {
  bill: Bill,
}

const BillSection = (props: Props) => {
  return (
    <Card color={THEME.colors.white.bg} >
      <div className="py-5 px-8">
        {props.bill.items.map((itemBill) => {
          return (
            <BilliItem amount={itemBill.amount} subject={itemBill.subject} key={itemBill.subject} />
          )
        }
        )}
        <div className='mt-4'>
          <BilliItem amount={props.bill.total} subject="Total" important={true} />
        </div>

      </div>

    </Card>
  )
}
export default BillSection