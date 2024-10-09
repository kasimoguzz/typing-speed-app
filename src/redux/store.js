import { configureStore } from '@reduxjs/toolkit'
import WordSlice from './WordSlice/WordSlice'

export const store = configureStore({
    reducer:{
        typingSpeed : WordSlice
    }
})

