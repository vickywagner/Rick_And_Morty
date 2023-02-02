import React from "react";
import style from "../Footer/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.infoLeft}>
        <h5>Información</h5>
        <span>
          Proyecto soyHenry <br />
          Desarrollado por Victoria Wagner Trento
          <br />
          victoriaawagnertrento@gmail.com
          <br />
        </span>
      </div>
      <div className={style.infoRight}>
      <a href='https://www.linkedin.com/in/victoria-wagner-trento-153441176/'> LinkedIn
          <img className={style.icono} src="https://cdn-icons-png.flaticon.com/512/3955/3955051.png" alt="linkedin"/>
        </a>
        <a href='https://github.com/vickywagner/Rick_And_Morty'>GitHub
          <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github"/>
        </a>
      </div>
    </div>
  );
};