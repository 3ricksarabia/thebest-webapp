import styles from "@/styles/Home.module.css";
import { players } from "@/constants/players";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides} id="slides">
        {players.map((player, index) => (
          <div key={index} id={`card-${index}`} className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>{player.name}</h3>
              <p className={styles.team}>{player.club}</p>
              <hr />
              <section className={styles.details}>
                <div className={styles.box}>
                  <h4 className={styles.title}>Age</h4>
                  <h5 className={styles.value}>{player.age}</h5>
                </div>
                <div className={styles.box}>
                  <h4 className={styles.title}>Position</h4>
                  <h5 className={styles.value}>{player.position}</h5>
                </div>
                <div className={styles.box}>
                  <h4 className={styles.title}>Nationality</h4>
                  <h5 className={styles.value}>{player.country}</h5>
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
