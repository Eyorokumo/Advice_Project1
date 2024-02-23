import React, { useEffect, useState } from "react";
import axios from "axios";
import dividerDesktop from "./Assets/pattern-divider-desktop.svg";
import dividerMobile from "./Assets/pattern-divider-mobile.svg";
import dice from "./Assets/icon-dice.svg";
export const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="card">
      <p>ADVICE #{advice.id}</p>
      <h2>“{advice.advice}”</h2>
      <img src={dividerDesktop} className="divider-desktop" alt="divider" />
      <img src={dividerMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};
