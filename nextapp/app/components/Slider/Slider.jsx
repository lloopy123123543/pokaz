"use client"
import React, { useEffect, useState } from 'react'
import sliderStyles from "@/app/scss/slider.module.scss"
import Posts from "./Posts"
import Grid from '../Grid/Grid'


export default function Slider() {
    const [Buttons, setButtons] = useState(1)
    console.log()

    useEffect(() => {
        const sliderImage = document.querySelector(`.${sliderStyles.image}`);
        sliderImage.style.backgroundSize = "cover";
    
    }, [Buttons])
    
  return (
    <div>

<div style={{zIndex:10}} className={sliderStyles.main} >
        <div className={sliderStyles.topChooser}>
            <div onClick={()=>{setButtons(1)}}  className={`${sliderStyles.button} ${Buttons === 1 ? sliderStyles.button_active : sliderStyles.button}`}>Картинка 1</div>
            <div onClick={()=>{setButtons(2)}}  className={`${sliderStyles.button} ${Buttons === 2 ? sliderStyles.button_active : sliderStyles.button}`}>Картинка 2</div>
        </div>

        <div className={sliderStyles.slider}>
        <div>
            <h4>{Posts[Buttons-1].title}</h4>
            <div>{Posts[Buttons-1].text}</div>
        </div>
        <div  style={{ background:`url("/assets/images/image${Buttons}.png")`, backgroundSize:"cover"}} className={sliderStyles.image}>

        </div>

        </div>
    </div>
    </div>
  )
}
