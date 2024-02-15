"use client"
import React from 'react'
import styles from "./styles.module.scss";
import PromptForm from './prompt-form';
import PromptSuggestions from './prompt-suggestions';
import Examples from './examples';

import ResultImage from './result-image';



const HomePageContainer = () => {
  
  return (
    <div className={styles.homePageContainer}>
        <h1 className={styles.title}>You just imagine,<br/> we handle the rest</h1>
        <p className={styles.description}>
            Tell us a prmpt and we&apos;ll generate a story for you.
        </p>
        <PromptForm/>
        <ResultImage/>
        <PromptSuggestions/>
        <Examples/>

    </div>
  )
}

export default HomePageContainer