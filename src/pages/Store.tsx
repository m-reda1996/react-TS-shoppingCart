import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../component/StoreItem"
import storeItem from "../data/item.json"


export function Store() {
  return (
    <>
    <h1 style={{color : "red"}}>Store</h1>    
    <Row md={2} xs ={1} lg ={3} className = "g-3 ">
      {storeItem.map(item =>(
        <Col key ={item.id} >
        <StoreItem {...item} />
        </Col>
      ) )}
    </Row>
    </>
  )
}
