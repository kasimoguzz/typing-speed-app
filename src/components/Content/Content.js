import React from 'react'
import Header from '../Header/Header'
import WordsSection from '../WordsSection/WordsSection'
import InputSection from '../InputSection/index'
import style from './Content.module.css'

function Content() {
  return (
    <div className={style.container}>
        <Header />
        <WordsSection />
        <InputSection />
    </div>
  )
}

export default Content