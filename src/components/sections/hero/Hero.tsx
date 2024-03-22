import Discord from "@/components/imageComponents/discord";
import Logomark from "@/components/imageComponents/logoMark";
import Twitter from "@/components/imageComponents/twitter";
import Image from "next/image";
import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.container}>
      <p className={css.textTop}>diD yOu seE iT ?</p>
      <h1 className={css.title}>YACHT APES</h1>
      <p className={css.textMid}>Apes aRe eveRywhere</p>
      <div className={css.imageThumb}>
        <Image
          src="/images/hero/hero-m.webp"
          alt="Hero Ape"
          fill={true}
          priority
          className={css.image}
        />
      </div>
      <button className={css.mainButton}>MEET APES</button>
      <p className={css.textBottom}>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </div>
  );
}
