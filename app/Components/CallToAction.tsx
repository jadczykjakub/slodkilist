import React from "react";
import Button from "./Button";
import style from "./CallToAction.module.scss";

export default function CallToAction() {
  return (
    <div className={style.cta}>
      <h1>Jestes zainteresowany?</h1>
      <p>napisz do nas na facebooku i bla bla bla </p>
      <Button />
    </div>
  );
}
