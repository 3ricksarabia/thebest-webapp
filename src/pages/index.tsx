import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { players } from "@/constants/players";
import Slider from "@/components/slider";

const Home = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ID = entry.target.id?.split("-")[1] || 0;
            const YEAR = document.querySelector(
              `#year-${players[Number(ID)].year}`
            );
            YEAR?.scrollIntoView({ behavior: "smooth", block: "center" });
            setPosition(Number(ID));
            observer.unobserve(entry.target);
          }
        }),
      {
        root: document.querySelector("#slides"),
        rootMargin: "0px",
        threshold: 1,
      }
    );

    players.forEach((_, index) => {
      observer.observe(document.querySelector(`#card-${index}`) as Element);
    });
  }, [position, setPosition]);

  return (
    <main className={styles.container}>
      <div className={styles.years}>
        {players.map(({ year }, index) => (
          <a
            key={year}
            id={`year-${year}`}
            className={position === index ? styles["year-active"] : styles.year}
            href={`#card-${index}`}
          >
            {year}
          </a>
        ))}
      </div>
      <Slider />
    </main>
  );
};

export default Home;
