import React from "react";
import ProductCard from "./ProductCard";
import style from "./Products.module.scss";

export default function Products() {
  const products = [
    {
      title: "Produkt 1",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 2",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 3",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 4",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 5",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 6",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 7",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 8",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 9",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Produkt 10",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div className="ornament" id="products">
      <div className={style.productDesc}>
        <h2>A to nasze produkty</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
          ratione suscipit quam similique quaerat aliquid iusto quidem molestias
          repellendus numquam ex, dicta doloremque harum dolor placeat
          excepturi. Mollitia, explicabo!
        </p>
      </div>
      <div className={style.productGrid}>
        {products.map((card, index) => {
          return (
            <ProductCard
              key={index}
              title={card.title}
              description={card.desc}
              imageIndex={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
