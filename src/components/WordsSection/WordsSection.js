import React, { useEffect, useState } from "react";
import './WordsSection.css'

import { useSelector, useDispatch } from "react-redux";
import { setCurrentWord } from "../../redux/WordSlice/WordSlice";

function WordsSection() {
  const { words, selectedLanguage, wordIndex, language, tickStatus } =
    useSelector((state) => state.typingSpeed);
  const [number, setNumber] = useState(0);
  const [someWords, setSomeWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wordIndex % 20 === 0) {
      setNumber(wordIndex);
      setCurrentIndex(wordIndex);
    }
    setSomeWords(words.slice(number, 20 + number));
  }, [words, number, wordIndex]);

  useEffect(() => {
    let currentId = wordIndex;
    currentId === 20 ? (currentId = 0) : (currentId = wordIndex % 20);
    dispatch(
      setCurrentWord(
        selectedLanguage === language[0]
          ? someWords[currentId]?.turkish
          : someWords[currentId]?.english
      )
    );
  }, [wordIndex, dispatch, selectedLanguage, language, someWords]);
  return (
    <div className="container">
      <p className="text-container">
        {someWords.map((word, index) => {
          return (
            <span
              key={index}
              className={`word ${
                wordIndex === currentIndex + index
                  ? tickStatus === true
                    ? "selected-word-red"
                    : "selected-word-gray"
                  : word.status === "correct"
                  ? "correct-word"
                  : word.status === "wrong"
                  ? "wrong-word"
                  : "default-word"
              }`}
            >
              {selectedLanguage === language[0] ? word.turkish : word.english}
            </span>
          );
        })}
      </p>
    </div>
  );
  
}

export default WordsSection;
