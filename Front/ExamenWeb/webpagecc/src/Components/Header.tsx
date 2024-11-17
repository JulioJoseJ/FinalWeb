import React from 'react'
import './styles/Header.css'
export const Header = () => {
  return (
    <div className='header'>
     <div className='header-content'>
      <h2>The greates makeup empire in the world</h2>
      <p>We offer the best makeup products, models, events and MORE!!!</p>
      <img className="img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sV40XtGYkcO4TFNzxD9JIwHaDt%26pid%3DApi&f=1&ipt=df9a9b9095109cfb0c65d3ee2668e09b3da831423cb911c5b8610508ef25f90a&ipo=images"
      alt="" width={500}/>
     </div>
     
    </div>
  )
}

export default Header