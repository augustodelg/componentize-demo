import { Fragment } from "react";
import { BillItem } from "../../../entity/billi.type";
import BilliItem from "./BilliItem";

interface Props {
  details: BillItem[];
}

export const BilliDetails = (props: Props) => {
  return (
    <Fragment>
      {props.details.map((itemBill) => {
        return (
          <BilliItem
            amount={itemBill.amount}
            subject={itemBill.subject}
            key={itemBill.subject}
          />
        );
      })}
    </Fragment>
  );
};
