import React from 'react'
import styles from "./styles.module.scss";
import GithubIcon from "@/assets/icons/github.svg"
import TwitterIcon from "@/assets/icons/twitter.svg"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/aliihsanertugrul" target='_blank'><GithubIcon/></Link>
      <Link href="https://twitter.com" target='_blank'><TwitterIcon/></Link>
      <p>
        Made by <b>Ali ihsan Ertugrul</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
      
      
    </footer>
  )
}

export default Footer