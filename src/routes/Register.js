import React from 'react'
import Header from './Header';
import '../public/style/register.css'

const Register = () => {
  return (
    <>
    <Header/>
    <div class="container1">
        <div class="inner">
            <span class=" menu"> Home > 회원가입</span>
        </div>
    </div>


    <div class="register-container">

        <div class="register-box">
            <form class="name-form">
                <label for="userName">이름</label>
                <input type="text" id="userName" placeholder="2글자이상 문자로 입력하세요." required autocomplete="off"></input>
                <p id="userNameErr">이름은 2글자이상 문자로 입력하세요.</p>
            </form>
            <form class="userid-form">
                <label for="userId">userid</label>
                <input type="text" id="userId" placeholder="5글자이상 영문자로 입력하세요." required autocomplete="off"></input>
                <p id="userIdErr">이름은 5글자이상 문자로 입력하세요.</p>
            </form>
            <form class="useremail-form">
                <label for="userEmail">Email</label>
                <input type="text" id="userEmail" placeholder="userid@naver.com" required autocomplete="off"></input>
                <p id="userEmailErr">userid@naver.com, user.id@naver.co.ko</p>
            </form>
            <form class="useremail-form">
                <label for="userPhone">전화번호</label>
                <input type="text" id="userPhone" placeholder="(022)4564-4567"></input>
                <p id="userPhoneErr">(022)4564-4567, 022-4564-4567, 022 4564 4567</p>
            </form>
            <form class="password-form">
                <label for="userPwd">비밀번호</label>
                <input type="password" id="userPwd" placeholder="문자,숫자,특수문자를 포함한 8자리" required></input>
                <p id="userPwdErr">TESTtest1234$ 특수문자[!, $, %]</p>
            </form>
            <form class="rePassword-form">
                <label for="userRepwd">비밀번호확인</label>
                <input type="password" id="userRepwd" placeholder="이전에 입력한 비밀번호를 한번 더 입력해주세요"></input>
                <p id="userRepwdErr">이전에 입력한 비밀번호와 같지 않습니다.</p>
            </form>
            <div>
                <button id="submitBtn">회원가입</button>
                <button id="resetBtn">취소</button>
                
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register