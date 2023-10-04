import { useState } from "react";

const Input = () => {
    let [isInputClicked, setIsInputClicked] = useState(false);
	return (
		<div className="bg">
			<input
				// 클릭될 때 작동
				onFocus={() => {
					setIsInputClicked(true);
				}}
				// 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
				onBlur={() => {
					setIsInputClicked(false);
				}}
				placeholder={isInputClicked === true ? "" : "5글자이상 영문자로 입력하세요."}
			/>
		</div>
	);
}

export default Input