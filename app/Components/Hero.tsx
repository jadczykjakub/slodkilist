import React from "react";
import Image from "next/image";
import style from "./Hero.module.scss";
import Button from "./Button";

export default function Hero() {
  return (
    <div className={`${style.grid} ornament `}>
      <div className={style.left}>
        <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
          Lorem Ipsum
        </p>
        <h1 className="mb-4 font-weight-normal line-height-1_4">
          Simply dummy text of the printing{" "}
          <span className="text-primary font-weight-medium">Name</span>
        </h1>
        <p className="text-muted mb-4 pb-2">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <Button title="Zobacz ofere" isScroll={true} />
      </div>
      <div className={style.right}>
        <Image
          src="/products/hero.jpg"
          width={400}
          height={400}
          alt=""
          className={style.img}
        />
      </div>
    </div>
  );
}
