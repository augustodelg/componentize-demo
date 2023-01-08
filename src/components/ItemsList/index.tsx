import { Fragment, PropsWithChildren } from "react";
import THEME from "../../config/theme";
import { ProductInCart } from "../../entity/product.types";
import Typography from "../generals/Typography";
import ItemInCart from "./components/ItemInCart";

interface Props {
  items: ProductInCart[];
}

const ItemList = (props: PropsWithChildren<Props>) => {
  const cantProducts = props.items.length;

  return (
    <Fragment>
      <Typography.Subtitle>{cantProducts} Items</Typography.Subtitle>
      <div className="h-96 overflow-auto no-scrollbar rounded-3xl">
        {props.items.map((item) => (
          <ItemInCart item={item} key={item.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default ItemList;
