
import Header from './Header';
import '../public/style/order.css'
import { useDispatch, useSelector } from "react-redux"
import { addCount } from "./Store"




const Order = () => {
  let state = useSelector ((state)=> state)
  let dispatch = useDispatch()
  
  return (
    <>
    <Header/>
    <div class="container1">
        <div class="inner">
            <span class=" menu"> Home > 주문내역</span>
        </div>
    </div>
    
    <div class="order-container">
    <div class="order-box">
        <h2>{state.user.name} 님의 장바구니</h2>
            
    <thead>
    <tr>
      <th></th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
      <th></th>
      
    </tr>
  </thead>
  
    {
    state.cart.map((a,i)=>
    <tr >
      <td>{i+1}</td> 
      <td>{state.cart[i].name}</td>
      <td>{state.cart[i].count}</td>
      <td> <button onClick={()=>{dispatch(addCount(i))}}>+</button></td>

    </tr>
    ) 
}
      

                 
        </div>    
        </div>

    </>
  )
}

export default Order