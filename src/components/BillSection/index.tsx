import THEME from "../../config/theme";
import { Bill } from "../../entity/billi.type";
import Card from "../generals/Card";
import Typography from "../generals/Typography";
import { BilliDetails } from "./components/BilliDetails";
import BilliItem from "./components/BilliItem";

interface Props {
  bill: Bill;
}

const BillSection = (props: Props) => {
  return (
    <Card color={THEME.colors.white.bg}>
      <div className="py-5 px-8 ">
        <BilliDetails details={props.bill.items} />
        <div className="mt-4 divide-y">
          <div className={`${THEME.colors.grayMedium.normal}`} />
          <BilliItem
            amount={props.bill.total}
            subject="Total"
            highlight={true}
          />
        </div>
      </div>
    </Card>
  );
};
export default BillSection;
