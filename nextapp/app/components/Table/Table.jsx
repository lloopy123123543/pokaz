import React from 'react'
import tableStyles from "@/app/scss/table.module.scss"
import Grid from '../Grid/Grid'
export default function Table() {
  return (
    <Grid>
      <div style={{zIndex:10}} className={tableStyles.table}>
        <div className={tableStyles.leftTitles}>
        <div className={tableStyles.col_left_inside}>Стоимость</div>
        <div className={tableStyles.col_left_inside_color}>Кол-во анализов</div>
        <div className={tableStyles.col_left_inside}>Стоимость одного анализа</div>
        <div className={tableStyles.col_left_inside_color}>Кол-во запросов</div>
        <div className={tableStyles.col_left_inside}>Автоообновление анализа</div>
        <div className={tableStyles.col_left_inside_color}>Количество доступов</div>
        <div className={tableStyles.col_left_inside}>Плагин хром авторизация</div>
        <div className={tableStyles.col_left_inside_color}>Прием заявок на закуп</div>
        <div className={tableStyles.col_left_inside}>Обучение</div>
        <div className={tableStyles.col_left_inside_color}>Рекомендации по категориям</div>

        </div>
        <div>
            <div className={tableStyles.cols}>
                <div><h3>Начальный</h3></div>
                <div><h3>Профессиональный</h3></div>
                <div><h3>Корпоративный</h3></div>
            </div>
            <div className={tableStyles.table_inside}>

                <div style={{borderRadius:"9px 0 0"}} className={tableStyles.col_inside}>5000</div>
                <div className={tableStyles.col_inside}>25000</div>
                <div style={{borderRadius:"0 9px 0 0"}} className={tableStyles.col_inside}>100000</div>


                <div className={tableStyles.col_inside_color}>500</div>
                <div className={tableStyles.col_inside_color}>3000</div>
                <div className={tableStyles.col_inside_color}>15000</div>

     
                <div className={tableStyles.col_inside}>10</div>
                <div className={tableStyles.col_inside}>8,33</div>
                <div className={tableStyles.col_inside}>6,66</div>


                <div className={tableStyles.col_inside_color}>300</div>
                <div className={tableStyles.col_inside_color}>безлимит</div>
                <div className={tableStyles.col_inside_color}>безлимит</div>


                <div className={tableStyles.col_inside}>1/24</div>
                <div className={tableStyles.col_inside}>раз в час</div>
                <div className={tableStyles.col_inside}>раз в час</div>


                <div className={tableStyles.col_inside_color}>1</div>
                <div className={tableStyles.col_inside_color}>1</div>
                <div className={tableStyles.col_inside_color}>5</div>


                <div className={tableStyles.col_inside}>1</div>
                <div className={tableStyles.col_inside}>1</div>
                <div className={tableStyles.col_inside}>1</div>


                <div className={tableStyles.col_inside_color}>5 заявок</div>
                <div className={tableStyles.col_inside_color}>безлимит</div>
                <div className={tableStyles.col_inside_color}>безлимит</div>


                <div className={tableStyles.col_inside}>-</div>
                <div className={tableStyles.col_inside}><svg class="TableIcon TableCell__icon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg></div>
                <div className={tableStyles.col_inside}><svg class="TableIcon TableCell__icon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg></div>

                <div style={{borderRadius:"0 0 0 9px"}} className={tableStyles.col_inside_color}>-</div>
                <div className={tableStyles.col_inside_color}><svg class="TableIcon TableCell__icon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg></div>
                <div style={{borderRadius:"0 0 9px 0"}} className={tableStyles.col_inside_color}><svg class="TableIcon TableCell__icon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg></div>
            </div>
        </div>

    </div>
    </Grid>
  )
}
