"use client";
import classNames from "classnames";
import styles from "./index.module.scss";
import Pause from "../../../public/icons/pause.svg";
import Play from "../../../public/icons/play.svg";
import Restart from "../../../public/icons/restart.svg";
import Plus from "../../../public/icons/Plus.svg";

import { useState } from "react";

type TimerType = "long" | "short" | "pomodoro";

function Home() {
  const [timer, setTimer] = useState<TimerType>("pomodoro");
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

  function timerValue(timerType: TimerType) {
    switch (timerType) {
      case "pomodoro":
        return "25:00";
      case "short":
        return "05:00";
      default:
        return "15:00";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTimer}>
        <div className={styles.backgroundTimer}>
          <div className={styles.typeTimes}>
            <div
              className={classNames(styles.typeTimeItem, {
                [styles.active]: timer == "pomodoro",
              })}
              onClick={() => {
                setTimer("pomodoro");
              }}
            >
              Pomodoro
            </div>
            <div
              className={classNames(styles.typeTimeItem, {
                [styles.active]: timer == "short",
              })}
              onClick={() => {
                setTimer("short");
              }}
            >
              Descanso Curto
            </div>
            <div
              className={classNames(styles.typeTimeItem, {
                [styles.active]: timer == "long",
              })}
              onClick={() => {
                setTimer("long");
              }}
            >
              Descanso Longo
            </div>
          </div>
          <div className={styles.timer}>{timerValue(timer)}</div>
          <div className={styles.controls}>
            <div className={styles.restartControl}>
              <Restart />
            </div>
            <div className={styles.playPauseControl}>
              <Play />
            </div>
            <div className={styles.StopControl}>
              <Pause />
            </div>
          </div>
        </div>
      </div>
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
