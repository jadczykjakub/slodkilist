import React from "react";
import Image from "next/image";
import Button from "./Button";
import style from "./ProductCard.module.scss";

interface IProductCard {
  title: string;
  imageIndex: number;
  description: string;
}

export default function ProductCard({
  title,
  imageIndex,
  description,
}: IProductCard) {
  return (
    <div className={style.productCard}>
      <Image
        src={`/products/${imageIndex}.jpg`}
        width={300}
        height={300}
        alt=""
        className={style.img}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button />
    </div>
  );
}
