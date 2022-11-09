import { Button, Card } from "react-bootstrap";
import { UseshoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/FormatCurrency";

type StoreItemProp = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProp) {
  const {
    gitItemsQuantity,
    increaseItemsQuantity,
    decreaseItemsQuantity,
    removeFromCart,
  } = UseshoppingCart();
  const quantity = gitItemsQuantity(id); 
  return (
    <Card>
      <Card.Img src={imgUrl} height="300px" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span> {name} </span>
          <span className="ms-3 text-muted "> {formatCurrency(price)} </span>
        </Card.Title>
        <div className="mt-auto ">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemsQuantity(id)}>Add to card </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column "
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center  justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseItemsQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in the cart
                </div>
                <Button onClick={() => increaseItemsQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
