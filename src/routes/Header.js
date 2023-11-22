import React from 'react';


function Header(props) {
	
	return (
		
		<>
			<div class="hidden_header">
				<a href=""> <img src="/images/menu-regular-48.png" alt=""></img></a>
				<a href=""><img src="로고.gif" alt=""></img></a>
				<button> <a href="">딜리버리주문</a> </button>
			</div>
			<div class="header-top">
				<div class="header-top2">
				<a href="/login" id="login-register">로그인</a> &nbsp; &nbsp;
				<a href="/register" id="login-register">회원가입</a>
					<a href ="/order">주문/예약 내역</a>
				</div>

			</div>

			<div class="head">
				<nav class="clearFix top container">
					<ul class="main">
						<li class="toplogo"> <a href="/"> <img src="/로고.gif" width="63" height="62"
							class="logo"></img></a>
						</li>
						<li class="topmenu "><a href="#">메뉴소개</a>
							<ul class="subtopmenu sub1">
								<li>
								<a href="/new">
										신제품(NEW)
									</a>
								</li>
								<li>
								<a href="/premium">
										프리미엄
									</a>
								</li>
								<li>와퍼&주니어</li>
								<li>치킨&슈림프버거</li>
								<li>올데이킹&킹모닝</li>
								<li>사이드</li>
								<li>음료&디저트</li>
							</ul>
						</li>
						<li class="topmenu "> <a href="#">매장소개</a>

							<ul class="subtopmenu sub2">
								<li><a href="#">매장찾기</a></li>
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