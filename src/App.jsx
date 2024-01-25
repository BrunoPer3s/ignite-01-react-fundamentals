import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import styles from "./App.module.css";
import "./global.css";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Aside />
        <main>main</main>
      </div>
    </>
  );
}
