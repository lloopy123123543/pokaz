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
          <Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png"}></Image>
        </div>
        <div className={footerStyles.col}><a>Описание</a></div>
        <div className={footerStyles.col}><a>Цены</a></div>
      </div>
      <div className={footerStyles.citata}>© 2023 MPUNIT</div>
    </div>
    </Grid>
  )
}
