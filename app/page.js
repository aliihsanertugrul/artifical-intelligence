"use client"
import HomePageContainer from '@/containers/home-page-container'
import { HomePageProvider } from '@/containers/home-page-container/useHomePage'
import React from 'react'

const HomePage = () => {
  return (
    <HomePageProvider>
      <HomePageContainer/>
    </HomePageProvider>
  )
}

export default HomePage