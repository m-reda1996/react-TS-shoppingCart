import { Offcanvas, Stack } from "react-bootstrap";
import { UseshoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/FormatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/item.json"

type shoppingCartProps ={
  isOpen : boolean
}

export function ShppingCart({isOpen} : shoppingCartProps) {
  const {closeCart,cartItems} = UseshoppingCart()
  return (
    <Offcanvas show={isOpen} placement="end" onHide = {closeCart } >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} /> 
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total {formatCurrency(cartItems.reduce((total , CartItem) => {
            const item = storeItems.find(i => i.id === CartItem.id) 
            return total + (item?.price || 0) * CartItem.quantity
          }, 0 )
          )}
        </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
