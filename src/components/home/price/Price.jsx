import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Choose your tariff plan' subtitle='Experience the difference with services tailored to your needs.' />
          <PriceCard />
        </div>
      </section>
    </> 
  )
}

export default Price
