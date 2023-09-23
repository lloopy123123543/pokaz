import React from 'react'
import Image from 'next/image'
import stylesHeader from "../../scss/header.module.scss"


export default function Header() {
  return (
    <div className={stylesHeader.header}>
        <div className={stylesHeader.sideBlock}>
            <div className={stylesHeader.col}><Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png" }></Image></div>
            <div className={stylesHeader.col}>Продукты</div>
            <div className={stylesHeader.col}>Решения</div>
            <div className={stylesHeader.col}>Разработчики</div>
            <div className={stylesHeader.col}>Ресурсы</div>
            <div className={stylesHeader.col}>Прайслист</div>
        </div>
        <div className={stylesHeader.sideBlock}>
            <div className={stylesHeader.button1}>Профиль</div>

        </div>
    </div>
  )
}
