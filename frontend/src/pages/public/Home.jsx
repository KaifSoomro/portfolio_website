import React, { useEffect } from 'react'
import Hero from '../../components/home/Hero'
import Experienced from '../../components/home/Experienced'
import ProjectsComp from '../../components/home/ProjectsComp'
import ExperienceComp from '../../components/home/ExperienceComp'
import ContactFooter from '../../components/home/ContactFooter'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <Hero />
      <Experienced />
      <ProjectsComp />
      <ExperienceComp />
      <ContactFooter />
    </>
  )
}

export default Home