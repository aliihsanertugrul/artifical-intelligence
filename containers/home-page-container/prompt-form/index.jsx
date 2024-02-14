"use client"
import React, { useState } from 'react'
import styles from "./styles.module.scss";
import { useHomePage } from '../useHomePage';

const PromptForm = () => {
 const {prompt,setPrompt,generateImage}=useHomePage();

  const handlePromptChange = (e) => {
    setPrompt(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    generateImage();
  }

// console.log(prompt)
  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea className={styles.promptTextarea}
        rows={2}
        typeof='text'
        required
        placeholder='An orchestra of characters playing instrumentss on fire in a chapel + surrounded by ghosts made out of chiseled marble'
        onChange={handlePromptChange}
        value={prompt}
        ></textarea>
        <button className={styles.generateButton} type="submit">Generate</button>
      </form>
    </div>
  )
}

export default PromptForm