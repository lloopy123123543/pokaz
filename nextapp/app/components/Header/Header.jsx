import React from 'react'
import Image from 'next/image'
import stylesHeader from "@/app/scss/header.module.scss"
import Grid from '../Grid/Grid'



export default function Header() {
  return (

    <Grid> 
  

    <div className={stylesHeader.header}>
      <div className={stylesHeader.sideBlock}>
        <div className={stylesHeader.col}>
         <a href="#start"> <Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png"}></Image></a>
        </div>
        <div className={stylesHeader.col}><a href='#about'>Описание</a></div>
        <div className={stylesHeader.col}><a href='#price'>Цены</a></div>
      </div>
      <div className={stylesHeader.sideBlock}>
        <button>Кабинет</button>
      </div>
    </div>
    </Grid>

  
  )
}
