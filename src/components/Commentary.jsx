import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Commentary.module.css";

export function Commentary() {
  return (
    <div className={styles.commentaryContainer}>
      <img src="https://github.com/ericbernardes.png" alt="" />
      <div className={styles.commentaryContent}>
        <section>
          <header>
            <div className={styles.commentaryUserInfo}>
              <strong>
                Bruno Peres <span>você</span>
              </strong>
              <span>Cerca de 2h</span>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </section>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir
            <div className={styles.circle} />
            03
          </button>
        </footer>
      </div>
    </div>
  );
}
