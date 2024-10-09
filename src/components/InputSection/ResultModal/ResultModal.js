import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalStatus,
  resetGame,
  stopGame,
  setModalstate,
} from "../../../redux/WordSlice/WordSlice";
import { BiRefresh } from "react-icons/bi";
import styles from "../InputSection.module.css"; // CSS Module dosyanı import ediyorsun

function ResultModal() {
  const {
    selectedLanguage,
    totalCorrectWords,
    totalWrongWords,
    correctWordsTick,
    inCorrectWordsTick,
    language,
  } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalstate());
  }, [dispatch]);

  function closeModal() {
    dispatch(resetGame());
    dispatch(setModalStatus(false));
    dispatch(stopGame());
  }

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>
              {selectedLanguage === language[0] ? "Sonuçlar" : "results"}
            </h3>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalScore}>
              <span className={styles.scoreText}>
                {totalCorrectWords * 10 - totalWrongWords * 2.5}
              </span>
              <span className={styles.congratulationText}>
                {selectedLanguage === language[0]
                  ? "(Puan kazandınız, Tebrikler)"
                  : "(Congratulations)"}
              </span>
            </div>
            <div className={styles.resultRow}>
              <span>{selectedLanguage === language[0] ? "Tuş Vuruşu" : "Keystroke"}</span>
              <div className={styles.keystrokeContainer}>
                <span className={styles.keystrokeSpan}>
                  ({<span className={styles.keystrokeCorrect}>{correctWordsTick}</span>}|
                  <span className={styles.keystrokeIncorrect}>
                    {inCorrectWordsTick}
                  </span>)
                </span>
                <span className={styles.keystrokeTotal}>
                  {correctWordsTick + inCorrectWordsTick}
                </span>
              </div>
            </div>
            <div className={styles.resultRow}>
              <span>{selectedLanguage === language[0] ? "Doğruluk" : "Truth"}</span>
              <span className={styles.accuracyPercentage}>
                {`${(
                  Math.round(totalCorrectWords * 100) /
                  Math.round(totalCorrectWords + totalWrongWords)
                ).toFixed(2)} %`}
              </span>
            </div>
            <div className={styles.resultRow}>
              <span>{selectedLanguage === language[0] ? "Doğru Kelime" : "Correct Words"}</span>
              <span className={styles.correctWords}>{totalCorrectWords}</span>
            </div>
            <div className={styles.resultRow}>
              <span>{selectedLanguage === language[0] ? "Yanlış Kelime" : "Incorrect Words"}</span>
              <span className={styles.incorrectWords}>{totalWrongWords}</span>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button className={styles.refreshButton} type="button" onClick={closeModal}>
              <BiRefresh />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.modalOverlay}></div>
    </>
  );
}

export default ResultModal;
