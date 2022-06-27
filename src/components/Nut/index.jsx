import React, { Fragment } from 'react'
import './Nut.css'

export default function Nut() {
  return (
   <Fragment>
       <section className="nut">
           <cards className="cards" >
               <img src={process.env.PUBLIC_URL + "calories-icon.png"} alt="" />
               <div className="nut-wrapper">
                   <h2>2.193 kcal</h2>
                   <p>Calories</p>
               </div>
           </cards>
           <cards className="cards" >
               <img src={process.env.PUBLIC_URL + "protein-icon.png"} alt="" />
               <div className="nut-wrapper">
                   <h2>155 g</h2>
                   <p>Protéines</p>
               </div>
           </cards>
           <cards className="cards" >
               <img src={process.env.PUBLIC_URL + "carbs-icon.png"} alt="" />
               <div className="nut-wrapper">
                   <h2>25 g</h2>
                   <p>Glucides</p>
               </div>
           </cards>
           <cards className="cards" >
               <img src={process.env.PUBLIC_URL + "fat-icon.png"} alt="" />
               <div className="nut-wrapper">
                   <h2>8 g</h2>
                   <p>Lipides</p>
               </div>
           </cards>
       </section>
   </Fragment>
  )
}
