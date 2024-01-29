import { Commentary } from "./Commentary";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header className={styles.postHeader}>
        <div className={styles.userInfo}>
          <Avatar
            profileAvatar={false}
            hasBorder
            src="https://github.com/brunoper3s.png"
          />
          <div>
            <strong>Bruno Peres</strong>
            <span>UI Designer</span>
          </div>
        </div>
        <time title="11 de maio ás 8:13" dateTime="2022-05-11 8:13:30">
          Públicado há 1h
        </time>
      </header>
      <main>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <span>#novoprojeto #nlw #rocketseat</span>
        </p>
      </main>
      <form>
        <fieldset>Deixe seu feedback</fieldset>
        <textarea
          placeholder="Deixe um comentário"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
      <Commentary />
    </article>
  );
}
