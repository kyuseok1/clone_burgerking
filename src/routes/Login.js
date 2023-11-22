import React from 'react'
import Header from './Header';



const Login = () => {
  return (
    <>
    <Header/>
    <div class="container1">
        <div class="inner">
            <span class=" menu"> Home > 로그인</span>
        </div>
    </div>

    <div class="login-container">

        <div class="login-box">
            <form class="userid-form">
                <label for="userId">userid</label>
                <input type="text"  id="userId"  placeholder="5글자이상 영문자로 입력하세요." autocomplete="off" ></input>
            </form>
            <form class="password-form">
                <label for="userPwd">비밀번호</label>
                <input type="password" id="userPwd" placeholder="문자,숫자,특수문자를 포함한 8자리" autocomplete="off"></input>
            </form>
            <div>
                <a href="/searchid" id="searchId">아이디 찾기</a> &nbsp;
                <a href="/searchpwd" id="searchPwd">비밀번호 찾기</a> &nbsp;
                <a href="/register" id="registerBtn">회원가입</a> &nbsp;
            </div>
            <div>
                <button id="loginBtn"><span>로그인</span></button>
                <button id="resetBtn"><span>취소</span></button>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Login