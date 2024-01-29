/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src, profileAvatar = false }) {
  return (
    <div
      className={`${
        hasBorder ? styles.avatarContainer : styles.avatarContainerNoBorder
      } ${profileAvatar && styles.profileAvatar}`}
    >
      <img src={src} />
    </div>
  );
}
