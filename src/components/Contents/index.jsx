import React, { Fragment } from "react";
import "./Contents.css";
import Nut from '../../components/Nut'

export default function Contents() {
  return (
    <Fragment>
      <div className="contents">
        <h1 className="hello">
          Bonjour <span className="name">Thomas</span>
        </h1>
        <p className="congratulation">
          Félicitation! Vous avez explosé vos objectifs hier &#128079;
        </p>
        <div className="info">
          <section className="tab"></section>
          <Nut />
        </div>
      </div>
    </Fragment>
  );
}
