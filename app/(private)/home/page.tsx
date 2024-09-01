"use client";

import styles from "./index.module.scss";
import Timer from "@/app/components/timer";
import Tasks from "@/app/components/tasks";

function Home() {
  return (
    <div className={styles.container}>
      <Timer />
      <Tasks />
    </div>
  );
}

export default Home;
