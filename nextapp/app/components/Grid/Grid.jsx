import React, { Children } from 'react';
import style from "@/app/scss/grid.module.scss";

export default function Grid({children}) {
  return (
    <div className={style.cont}>
          <div className={style.Section__masked}>
      <div className={style.Guides__container}>
        <div className={style.Guides__guide__straight}></div>
        <div className={style.Guides__guide}></div>
        <div className={style.Guides__guide}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={style.Guides__guide}></div>
          <div className={style.Guides__guide__straight}></div>
        </div>
      </div>
    </div>
    {children}
    </div>
  );
}