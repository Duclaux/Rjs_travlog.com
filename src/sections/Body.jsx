import React from 'react'
import People from '../components/People'
import Feature from '../components/Feature'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Destination from '../components/Destination'
import Testimonial from '../components/Testimonial'

const Body = () => {
  return (
    <>
      <Categories/>
      <Destination/>
      <People/>
      <Feature/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default Body