import { Button, Stack } from "react-bootstrap"
import { UseshoppingCart } from "../context/shoppingCartContext"
import storeItems from "../data/item.json"
import { formatCurrency } from "../utilities/FormatCurrency"

type cartItemProps = {
  id : number
  quantity : number
}

export function CartItem({id,quantity} : cartItemProps){
  const {removeFromCart} = UseshoppingCart()
  const item = storeItems.find(i => i.id === id )
  if (item == null ) return null
  return(
    <Stack direction="horizontal" gap = {2} className = "d-flex align-items-center "> 
      <img src={item.imgUrl} alt="" style={{height: "100px" ,width : "150px" , objectFit : "cover" }} />
      <div className="me-auto">
        <div>
        {item.name} {quantity > 1 && (
          <span style={{color: "red"}}>
            x{quantity}
          </span>
        )}
        </div>
        <div>
          {formatCurrency(item.price)}
        </div>

      </div>
      <div>
          {formatCurrency(item.price * quantity)}
        </div>
        <Button variant="outline-danger"  size="sm" onClick={() => removeFromCart(item.id)} >
          &times;
        </Button>
    </Stack>
  )  
}