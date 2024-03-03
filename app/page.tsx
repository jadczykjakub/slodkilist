import Image from "next/image";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import CallToAction from "./Components/CallToAction";
import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.page }>
      <Hero />
      <Products />
      <CallToAction />
    </main>
  );
}
