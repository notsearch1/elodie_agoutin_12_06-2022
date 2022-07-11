import React, { Fragment } from "react";
import "./Nut.css";
import { useParams } from "react-router";
import { useFetch } from "../../utils/hooks";


export default function Nut() {
  let { userId } = useParams();

  const { data, error, isLoading } = useFetch(
    `http://localhost:3000/user/${userId}`
  );

  return (
    <Fragment>
      {isLoading ? (
        <div>ca ne marche pas</div>
      ) : (
        <section className="nut">
          <div className="cards">
            <img src={process.env.PUBLIC_URL + "calories-icon.png"} alt="" />
            <div className="nut-wrapper">
              <h2>{data.data.keyData.calorieCount} kcal</h2>
              <p>Calories</p>
            </div>
          </div>
          <div className="cards">
            <img src={process.env.PUBLIC_URL + "protein-icon.png"} alt="" />
            <div className="nut-wrapper">
              <h2>{data.data.keyData.proteinCount} g</h2>
              <p>Protéines</p>
            </div>
          </div>
          <div className="cards">
            <img src={process.env.PUBLIC_URL + "carbs-icon.png"} alt="" />
            <div className="nut-wrapper">
              <h2>{data.data.keyData.carbohydrateCount} g</h2>
              <p>Glucides</p>
            </div>
          </div>
          <div className="cards">
            <img src={process.env.PUBLIC_URL + "fat-icon.png"} alt="" />
            <div className="nut-wrapper">
              <h2>{data.data.keyData.lipidCount} g</h2>
              <p>Lipides</p>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
