"use client";
import classNames from "classnames";
import styles from "./index.module.scss";
import Plus from "../../../public/icons/plus.svg";

import { useState } from "react";
import Timer from "../../components/timer";

function Home() {
  const [tasks, setTasks] = useState([
    {
      name: "Atividade de web",
      checked: false,
    },
    {
      name: "Formulario",
      checked: false,
    },
    {
      name: "Criar login",
      checked: true,
    },
  ]);

  return (
    <div className={styles.container}>
      <Timer />
      <div className={styles.sectionTask}>
        <div className={styles.taskContainer}>
          <h3 className={styles.titleTask}>Tarefas</h3>
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className={classNames(styles.itemList, {
                  [styles.active]: task.checked,
                })}
                onClick={() => {
                  setTasks(
                    tasks.map((item) => {
                      if (item === task) {
                        return {
                          name: task.name,
                          checked: !task.checked,
                        };
                      }
                      return item;
                    })
                  );
                }}
              >
                <div
                  className={classNames(styles.ball, {
                    [styles.active]: task.checked,
                  })}
                />
                <div
                  className={classNames(styles.labelItem, {
                    [styles.active]: task.checked,
                  })}
                >
                  {task.name}
                </div>
              </div>
            );
          })}

          <button type="button" className={styles.addItem}>
            <div className={styles.iconAdd}>
              <Plus />
            </div>
            <div className={styles.addItemLabel}>Adicionar Tarefa</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
