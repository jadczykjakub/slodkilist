import React from "react";
import Link from "next/link";
import style from "./Button.module.scss";

interface IButton {
  title?: string;
  to?: string;
  isScroll?: boolean;
}

export default function Button({
  title = "Zamów",
  isScroll = false,
  to = "https://google.pl",
}: IButton) {
  return (
    <>
      {isScroll && (
        <Link href="#products" className={style.button}>
          <div>{title}</div>
        </Link>
      )}

      {!isScroll && (
        <Link
          href={to}
          rel="noopener noreferrer"
          target="_blank"
          className={style.button}
        >
          <div>{title}</div>
        </Link>
      )}
    </>
  );
}
