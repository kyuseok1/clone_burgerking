import React from 'react'
import Header from './Header';

const SearchPwd = () => {
  return (
    <>
    <Header/>
    <div class="container1">
        <div class="inner">
            <span class=" menu"> Home > 비밀번호찾기</span>
        </div>
    </div>

    <div class="searchPwd-container">

        <div class="searchPwd-box">
            <form class="name-form">
                <label for="userName">이름</label>
                <input type="text" id="userName" placeholder="2글자이상 문자로 입력하세요." autocomplete="off"></input>
            </form>
            <form class="userid-form">
                <label for="userId">userid</label>
                <input type="text" id="userId" placeholder="5글자이상 영문자로 입력하세요." autocomplete="off"></input>
            </form>

            <div>
                <button id="searchPwdBtn">비밀번호찾기</button>
                <button id="resetBtn">취소</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchPwd