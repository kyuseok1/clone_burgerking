import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet  } from 'react-router-dom'

function Header(props) {
	let navigate = useNavigate()
	return (
		
		<>
			<div class="hidden_head">
				<a href=""> <img src="/images/menu-regular-48.png" alt=""></img></a>
				<img src="../public/images/버거킹로고.png" alt=""></img>
				<button> <a href="">딜리버리주문</a> </button>
			</div>
			<div class="header-top">
				<div class="header-top2">
				<Link to="/login" id="login-register">로그인</Link> &nbsp; &nbsp;
					<Link to="/register" id="login-register">회원가입</Link>
					<Link to ="/order">주문/예약 내역</Link>
				</div>

			</div>

			<div class="head">
				<nav class="clearFix top container">
					<ul class="main">
						<li class="toplogo"> <a href="/"> <img src="/로고.gif" width="63" height="62"
							class="logo"></img></a>
						</li>
						<li class="topmenu "><a href="./new.html">메뉴소개</a>
							<ul class="subtopmenu sub1">
								<li>
									<Link to="/new">
										신제품(NEW)
									</Link>
								</li>
								<li>
									<Link to="/premium">
										프리미엄
									</Link>
								</li>
								<li>와퍼&주니어</li>
								<li>치킨&슈림프버거</li>
								<li>올데이킹&킹모닝</li>
								<li>사이드</li>
								<li>음료&디저트</li>
							</ul>
						</li>
						<li class="topmenu "> <a href="./findStroe.html">매장소개</a>

							<ul class="subtopmenu sub2">
								<li><a href="./findStroe.html">매장찾기</a></li>
							</ul>
						</li>
						<li class="topmenu"><a href="#">이벤트</a>
							<ul class="subtopmenu sub3">
								<li>이벤트</li>
							</ul>
						</li>
						<li class="topmenu"><a href="#">브랜드스토리</a>
							<ul class="subtopmenu sub4">
								<li>BRAND</li>
								<li>WHOPPER</li>
								<li>COMM.</li>
							</ul>
						</li>
						<li> <button class="button1"><a href="#">가맹점 문의</a> </button> </li>
						<li> <button class="button2"><a href="#">딜리버리 주문</a> </button> </li>
					</ul>
				</nav>
			</div>
			<div class="hidden_head2"></div>
		
			
			
			</>
			
		
	);
}

export default Header;