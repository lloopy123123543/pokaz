import React from 'react'
import Image from 'next/image'
import stylesHeader from "@/app/scss/header.module.scss"
import Grid from '../Grid/Grid'



export default function Header() {
  return (
    <div style={{height:"auto"}}>
      <Grid/>
          <div className={stylesHeader.header}>
        <div className={stylesHeader.sideBlock}>
            <div className={stylesHeader.col}><Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png" }></Image></div>
            <div className={stylesHeader.col}><a>Описание</a></div>
            <div className={stylesHeader.col}><a>Цены</a></div>
        </div>
        <div className={stylesHeader.sideBlock}>
            <button >Профиль</button>
        </div>
    </div>
    </div>
  )
}
