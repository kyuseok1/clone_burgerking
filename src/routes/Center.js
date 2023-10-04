import React from 'react'

const Center = () => {
    return (
        <div class="clearFix container center3">
            <h1>매장찾기</h1>
            <p>고객님 주변에 있는 버거킹을 찾아보세요!</p>
            <p><button> <a href="./findStroe.html"> 매장찾기</a></button></p>
            <ul class="clearFix menuul">
                <li><span><br></br>집에서 편안하게<br></br> 받을수 있는
                    <br></br></span>
                    <strong>딜리버리</strong>
                </li>
                <li><span><br></br>미리 주문하고<br></br> 픽업가능한<br></br></span>
                    <strong>킹오더</strong>
                </li>
                <li><span><br></br>차안에서 빠르게<br></br> 이용할 수
                    있는</span>
                    <br></br><strong>드라이브스루</strong>
                </li>
                <li><span><br></br>24시간 언제든 <br></br>함께할 수
                    있는</span>
                    <br></br><strong>24시간</strong>
                </li>
                <li><span><br></br>든든한<br></br> 아침을
                    도와줄<br></br></span>
                    <strong>아침메뉴</strong>
                </li>
                <li>
                    <span><br></br>내 차와 함께<br></br> 올 수 있는</span>
                    <br></br><strong>주차공간</strong>
                </li>
            </ul>
        </div>
    )
}

export default Center