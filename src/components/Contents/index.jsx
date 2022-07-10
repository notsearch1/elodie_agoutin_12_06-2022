import React, { Fragment } from "react";
import "./Contents.css";
import Nut from '../../components/Nut'
import FirstDiag from "../FirstDiag";

export default function Contents(props) {
  const d=props.data.data.userInfos.firstName
  console.log(d)
  // const a= d.firstName
  // console.log(a)
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
          <section className="tab">
            <FirstDiag />
          </section>
          <Nut />
        </div>
      </div>
    </Fragment>
  );
}
