"use client"
import React from 'react'
import styles from "./styles.module.scss";
import {SUGGESTIONS} from "./constants.js";
import Tag from '@/components/tag';
import { useHomePage } from '../useHomePage';

const PromptSuggestions = () => {
  const {changePrompt}=useHomePage();
  return (
    <div className={styles.promptSuggestions}>
        <h3 className={styles.title}>Nothing in mind? Try one of these prompts:</h3>
        <div className={styles.suggestions}>
        {
            SUGGESTIONS.map((item)=>(
                <Tag onClick={changePrompt} key={item.id} title={item.title}/>
            ))
        }
        </div>
    </div>
  )
}

export default PromptSuggestions