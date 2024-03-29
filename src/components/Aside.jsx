import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Aside.module.css";

export function Aside() {
  return (
    <aside className={styles.asideContainer}>
      <div className={styles.coverContainer}></div>
      <div className={styles.avatarContainer}>
        <Avatar
          profileAvatar
          hasBorder
          src="https://github.com/brunoper3s.png"
        />
      </div>
      <strong>Bruno Peres</strong>
      <span>UI Designer</span>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
