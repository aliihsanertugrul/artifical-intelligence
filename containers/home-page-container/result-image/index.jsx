"use client"
import React from 'react'
import styles from "./styles.module.scss";
import { useHomePage } from '../useHomePage';
import Image from 'next/image';
import Loading from '@/components/loading';
import Tag from '@/components/tag';
import Link from 'next/link';

const ResultImage = () => {
    const {isSubmitting,error,image,prompt}=useHomePage()

    if(error) return <p className={styles.error}>{error.message}</p>
    if(!isSubmitting && !image) return null

  return (
    <div className={styles.resultImage}>
        <div className={styles.animation}>
            {
                isSubmitting ? (<Loading/>) : (
                    <>
                    <div className={styles.content}>
                        <p>{prompt}</p>
                        <Tag
                        title={
                            <Link href={image} target="_blank" download>Download</Link>
                        }
                        />
                    </div>
                    <Image src={image} alt={prompt} width={500} height={500}/>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default ResultImage

