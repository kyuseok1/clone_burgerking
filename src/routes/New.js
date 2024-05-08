import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const New = () => {
  const new_product = [
    {
      id: 1,
      name: "콰트로 맥시멈4",
      src: "/images/콰트로맥시멈.png",
      count: 1,
    },
    {
      id: 2,
      name: "스모크바비큐몬스터",
      src: "/images/스모크바비큐몬스터.png",
      count: 1,
    },
    {
      id: 3,
      name: "스모크바비큐와퍼",
      src: "/images/스모크바비큐와퍼.png",
      count: 1,
    },
    { id: 4, name: "스모키바비큐", src: "/images/스모키바비큐.png", count: 1 },
    { id: 5, name: "치킨킹BLT", src: "/images/치킨킹BLT.png", count: 1 },
  ];
  return (
    <>
      <Header />
      <div class="container1">
        <div class="inner">
          <span class=" menu"> Home > 신메뉴</span>
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
              </Link>
            </li>
            <li>
              <Link to="/premium">
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
          {new_product.map((a, i) => (
            <div>
              <button
                onClick={() => {
                  //  dispatch(addItem({id: i, name: state.new_product[i].name, src: "/images/통새우와퍼.png", count:1}))
                }}
              >
                <img src={new_product[i].src}></img>
                <h2>{new_product[i].name}</h2>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default New;
