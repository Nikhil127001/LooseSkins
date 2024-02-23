import React from "react"
import { BiStrikethrough } from "react-icons/bi"
import CustomizedAccordions from "./Accordion"
import ReviewComponent from "./ReviewComponent"
import { AiOutlineHeart } from 'react-icons/ai';


const ProductDetailsComponent = () => {
  return (
    <div className="productDetailsCompo">
        <h5>Mens Blue All Over printed T-shirt</h5>
        <text style={{backgroundColor: 'white', border:'1px dashed grey'}}>Rating 4.5 🌟</text>
        <div style={{marginTop: '5px'}}>
          <text style={{textDecoration: 'line-through', paddingTop: '5px'}}>₹999</text>
          <text style={{fontSize: '12px', color: 'green'}}>   50% OFF</text>
        </div>
        <div style={{fontSize: '27px'}}><text>₹499 </text></div>
        <div>
        <text>
            Choose Colour: Black
            </text>
            <div style={{display: 'flex', alignItems: 'center'}}>
            
            {[{name : 'black' , color : '#21130d'},{name : 'navyBlue' ,color :  '#063970'}, {name : 'white', color : '#F5F5F5'  },{name :'grey' , color : '#808080'}].map((item,idx) => (
                <div className='sideBarOptions' key={idx} style={{height: '50px', width: '50px', backgroundColor: `${item.color}`, borderRadius: '5px', margin: '2px'}}></div>
            ))}
            </div>
        <text>
          Select Size
            </text>
            <div style={{display: 'flex', alignItems: 'center'}}>
            
            {['XS','S','M','L','XL','XXL'].map((item,idx) => (
                <div className='sideBarOptions' key={idx} style={{height: '50px', width: '50px', borderRadius: '30px',
                backgroundColor: 'white'
                , margin: '2px', border: '1px solid grey', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{item}</div>
            ))}
            </div>
            </div>
            <hr/>
            <div className="AddToCartCompo">
              <button className="addtocartBtn" >Add to Bag</button>
              <button className="addtocartBtn">Save for later<AiOutlineHeart style={{fontSize: '20px', margin: '5px'}} /></button>
            </div>
            <hr/>
              <CustomizedAccordions/>
              <hr/>
              <ReviewComponent/>
        </div>
  )
}
export default ProductDetailsComponent