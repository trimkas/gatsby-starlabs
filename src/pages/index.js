import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemCard from "../components/itemCard"

//data import
import data from "../data/api.json"

const IndexPage = () => {

  const [itemType, setItemType] = useState('all');

  return <Layout>
    <SEO title="Home" />
    <h2 style={{textAlign: 'center'}}>Welcome to Simple House</h2>
    
    <p style={{textAlign: 'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, quae? Veniam numquam vel atque mollitia ad quo fugit earum accusantium iste soluta quibusdam, praesentium animi obcaecati hic! Numquam molestias tempore amet incidunt repellendus iure, odio non, fugiat eius, laudantium cum! Saepe quis animi explicabo, in repudiandae ducimus laboriosam at eveniet?</p>

    <div className="buttonHolder">

      <button onClick={() => setItemType('all')} className={itemType === 'all' ? 'buttonActive' : ''}>All</button>
      <button onClick={() => setItemType('pizza')} className={itemType === 'pizza' ? 'buttonActive' : ''}>Pizza</button>
      <button onClick={() => setItemType('salad')} className={itemType === 'salad' ? 'buttonActive' : ''}>Salad</button>
      <button onClick={() => setItemType('soup')} className={itemType === 'soup' ? 'buttonActive' : ''}>Soup</button>

    </div>

    <div className="itemHolder">
      {
        data.map((item, key) => {
          return itemType === 'all' || item.type === itemType 
            ? 
            <ItemCard
            key ={key} 
            image={item.image} 
            title={item.title} 
            desc = {item.description}
            rating = {item.rating}
            />
            :
            <></> 
          }
        )
      }
    </div>

  </Layout>
}

export default IndexPage
