import React from "react";

import { BiRefresh } from "react-icons/bi";
import CircleTimer from "./CircleTimer/CircleTimer";
import style from "./InputSection.module.css";

import { useSelector, useDispatch } from "react-redux";

import {
  startGame,
  setInputWord,
  setKeyPress,
  resetGame,
} from "../../redux/WordSlice/WordSlice";

function InputSection() {
  const { start, inputText, modalOpen } = useSelector(
    (state) => state.typingSpeed
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInputWord(e.target.value));

    if (!start) {
      dispatch(startGame());
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  const handleClick = () => {
    dispatch(resetGame());
  };
  return (
    <div className={style.container}>
      {/* Timer Clock */}
      <div className={style.circle}>
        <CircleTimer />
      </div>
      {/* Input */}
      <div className={style.inputBox}>
        <input
          type="text"
          placeholder="typing..."
          className="p-2 m-2 w-full rounded-md focus:outline-sky-500 text-slate-800"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          disabled={modalOpen}
        />
      </div>
      {/* start- reset */}
      <div className={style.refresh} onClick={handleClick}>
        <BiRefresh />
      </div>
    </div>
  );
}

export default InputSection;
