import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CartSection from '../components/Cart/CartSection'
import Container from '../components/Container'

export const MyCartPage = () => {
  return (
    <Container className="flex-grow px-5">
      <BreadCrumb currentPageTitle="MyCart"/>
      <CartSection/>
    </Container>
  )
}
