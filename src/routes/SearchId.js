import React from 'react'
import Header from './Header';


const SearchId = () => {
  return (
    <>
    <Header/>
    <div class="container1">
        <div class="inner">
            <span class=" menu"> Home > 아이디찾기</span>
        </div>
    </div>
    <div class="searchId-container">

        <div class="searchId-box">
            <form class="name-form">
                <label for="userName">이름</label>
                <input type="text" id="userName" placeholder="2글자이상 문자로 입력하세요." autocomplete="off"></input>
            </form>

            <form class="userphone-form">
                <label for="userPhone">전화번호</label>
                <input type="text" id="userPhone" placeholder="(022)4564-4567"></input>
                <p id="userPhoneErr">(022)4564-4567, 022-4564-4567, 022 4564 4567</p>
            </form>

            <div>
                <button id="serarchIdBtn">아이디 찾기</button>
                <button id="resetBtn">취소</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchId