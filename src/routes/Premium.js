import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Premium = () => {
  let premium = [
    { id: 1, name: "기네스와퍼", src: "/images/기네스와퍼.png", count: 1 },
    { id: 2, name: "몬스터와퍼", src: "/images/몬스터와퍼.png", count: 1 },
    {
      id: 3,
      name: "기네스콰트로치즈와퍼",
      src: "/images/기네스콰트로치즈와퍼.png",
      count: 1,
    },
    { id: 4, name: "몬스터x", src: "/images/몬스터x.png", count: 1 },
    { id: 5, name: "통새우와퍼", src: "/images/통새우와퍼.png", count: 1 },
  ];

  return (
    <>
      <Header />

      <div class="container1">
        <div class="inner">
          <span class=" menu"> Home > 프리미엄</span>
        </div>
      </div>
      <div class="bg">
        <div class="container2">
          <h3>메뉴소개 </h3>
          <ul>
            <li>
              <span> 스페셜&할인팩</span>
            </li>
            <li>
              {" "}
              <Link to="/new">
                <span> 신제품(NEW)</span>
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/premium">
                {" "}
                <span> 프리미엄</span>
              </Link>
            </li>
            <li>
              <span>와퍼&주니어</span>
            </li>
            <li>
              <span>치킨&슈림프버거</span>
            </li>
            <li>
              <span>올데이킹&킹모닝</span>
            </li>
            <li>
              <span>사이드</span>
            </li>
            <li>
              <span>음료&디저트</span>
            </li>
          </ul>
          {premium.map((a, i) => (
            <div data-filter={premium[i].name}>
              <button
                onClick={() => {
                  //  dispatch(addItem({id: state.cart.id, name: state.premium[i].name, src:"/images/통새우와퍼.png", count:1}))
                  //  console.log(state.cart)
                }}
              >
                <img src={premium[i].src}></img>
                <h2>{premium[i].name}</h2>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Premium;
