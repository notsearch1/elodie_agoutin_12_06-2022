import React, { Fragment } from "react";
import "./Contents.css";
import Nut from '../../components/Nut'
import FirstDiag from "../FirstDiag";
import { useFetch } from "../../utils/hooks";
import { useParams } from "react-router";


export default function Contents() {
  let { userId } = useParams();

  const { data, error, isLoading } = useFetch(`http://localhost:3000/user/${userId}`);
 

  return (
    <Fragment>
        {isLoading? (
          <div>ca ne marche pas</div>
        ):(
          <div className="contents">
          <h1 className="hello">
          Bonjour <span className="name">{data.data.userInfos.firstName}</span>
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
        )}
    </Fragment>
  );
}
