import { useEffect, useState } from "react";

import H2 from "@/ui/heading/h2";
import H3 from "@/ui/heading/h3";
import P from "@/ui/heading/p";

import styles from "./styles.module.scss";

export default function Raffle() {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = () => {
    setScrollState(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="flex container mx-auto p-5">
      <div className="mx-auto lg:px-24">
        <div
          className={`duration-300 ease-in text-center  ${
            scrollState < 300 ? "opacity-0" : "opacity-100"
          }`}
        >
          <H2>Rewards</H2>
        </div>
        <div
          className={`flex justify-around flex-wrap mt-4 duration-300 ease-in ${
            scrollState < 300 ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className={styles.prize}>
            <P className={styles.infoPrize}>
              This project <strong>does not</strong> offer monetary rewards. Instead, it encourages volunteers to contribute through personal motivation, supporting research and promoting urban walkability to help create better cities for everyone.            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
