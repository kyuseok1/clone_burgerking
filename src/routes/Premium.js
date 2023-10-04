import React from 'react'
import Header from './Header';
import '../public/style/premium.css'
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "./Store"



const Premium = () => {
  let state = useSelector ((state)=> state)
  let dispatch = useDispatch()
    return (
      <>
      <Header/>
      
      <div class="container1">
          <div class="inner">
              <span class=" menu"> Home > 프리미엄</span>
              
          </div>
      </div>
      <div class="bg">
        <div class="container2">
            <h3>메뉴소개 </h3>
            <ul>
                <li><span> 스페셜&할인팩</span></li>
                <li> <a href="/new"><span> 신제품(NEW)</span></a> </li>
                <li> <a href="/premium"> <span> 프리미엄</span></a></li>
                <li><span>와퍼&주니어</span></li>
                <li><span>치킨&슈림프버거</span></li>
                <li><span>올데이킹&킹모닝</span></li>
                <li><span>사이드</span></li>
                <li><span>음료&디저트</span></li>

            </ul>
            {
            state.premium.map((a,i)=>
            <div data-filter={state.premium[i].name}>
                    <button onClick={()=>{
                      dispatch(addItem({id: i, name: state.premium[i].name, src: "/images/통새우와퍼.png", count:1})) 
                    }}> 
                    <img src={state.premium[i].src}></img>
                    <h2>{state.premium[i].name}</h2>
                    </button>
                   
                    
            </div>
            )
            }
        </div>
        
    </div>
                
      </>
      );
      
      // <img src="/images/기네스와퍼.png"></img>
  
}
export default Premium