import React from 'react'
import Grid from '../Grid/Grid'
import footerStyles from "@/app/scss/footer.module.scss"
import Image from 'next/image'
export default function Footer() {
  return (
    <Grid> 
  

    <div className={footerStyles.header}>
      <div className={footerStyles.sideBlock}>
        <div className={footerStyles.col}>
        <a href="#start"> <Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png"}></Image></a>
        </div>
        <div className={footerStyles.col}><a href='#about'>Описание</a></div>
        <div className={footerStyles.col}><a href='#price'>Цены</a></div>
      </div>
      <div className={footerStyles.citata}>© 2023 MPUNIT</div>
    </div>
    </Grid>
  )
}
