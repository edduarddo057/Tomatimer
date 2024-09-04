import { ReactNode } from "react";
import styles from "./index.module.scss";

interface AppTopBarProps {
  children: ReactNode;
}
export function AppTopBar({ children }: AppTopBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topBarContainer}>
        <div className={styles.titleContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.img}
            src="/images/LogoMini.png"
            alt="Logo tomatimer"
          />
          <div className={styles.title}>Tomatimer</div>
        </div>
        {/* <div>actions</div> */}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
