import styles from "@/styles/Home.module.css";
import { players } from "@/constants/players";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides} id="slides">
        {players.map((player, index) => (
          <div key={index} id={`card-${index}`} className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>{player}</h3>
              <p className={styles.team}>Liverpool FC</p>
              <hr />
              <section className={styles.details}>
                <div className={styles.box}>
                  <h4 className={styles.title}>Age</h4>
                  <h5 className={styles.value}>31</h5>
                </div>
                <div className={styles.box}>
                  <h4 className={styles.title}>Position</h4>
                  <h5 className={styles.value}>RW</h5>
                </div>
                <div className={styles.box}>
                  <h4 className={styles.title}>Trophies</h4>
                  <h5 className={styles.value}>6</h5>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
