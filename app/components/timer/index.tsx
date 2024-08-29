"use client";

import {
	useTimerConfigStore,
} from "../../store/timer";
import { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import Pause from "../../../public/icons/pause.svg";
import Play from "../../../public/icons/play.svg";
import Restart from "../../../public/icons/restart.svg";
import classNames from "classnames";

type TimerType = "pomodoro" | "short" | "long";

export default function Timer() {
	const [time, setTime] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const [startSeconds, setStartSeconds] = useState(0);
	const [currentRound, setCurrentRound] = useState(1);
	const [isRunning, setIsRunning] = useState(false);
	const [timerType, setTimerType] = useState<TimerType>("pomodoro");

	const timerConfig = useTimerConfigStore((state) => state.timerConfig);

	const timerStateTimes = useMemo(() => {
		return {
			pomodoro: timerConfig.pomodoroMinutes * 60,
			short: timerConfig.shortMinutes * 60,
			long: timerConfig.longMinutes * 60,
		};
	}, [timerConfig]);

	const timerTypeTitles = useMemo(() => {
		return {
			pomodoro: "Pomodoro",
			short: "Descanso Curto",
			long: "Descanso Longo",
		};
	}, []);

	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (!isRunning) {
				clearInterval(timeInterval);
			} else {
				const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
				const diff = startSeconds - elapsedTime;
				setTime(diff);

				if (diff <= 0) {
					clearInterval(timeInterval);
					progressRound();
				}
			}
		}, 100);

		return () => clearInterval(timeInterval);
	});

	useEffect(() => {
		setTime(timerStateTimes[timerType]);
		setStartTime(Date.now());
		setStartSeconds(timerStateTimes[timerType]);
	}, [timerType, timerStateTimes]);

	useEffect(() => {
		setIsRunning(false);
	}, [timerConfig]);

	useEffect(() => {
		window.document.title = `${formatTime(time)} | ${timerTypeTitles[timerType]}`;
	}, [time, timerType, timerTypeTitles]);

	const getNextState = (timerType: TimerType) => {
		if (timerType === "short" || timerType === "long") {
			return "pomodoro";
		}

		return currentRound % timerConfig.numberOfRounds === 0
			? "long"
			: "short";
	};

	const progressRound = async () => {
		if (timerType !== "pomodoro") {
			setCurrentRound(
				(prevRound) => (prevRound % timerConfig.numberOfRounds) + 1
			);
			setIsRunning(timerConfig.autoStartWork);
		} else {
			setIsRunning(timerConfig.autoStartBreak);
		}

		setTimerType((timerType) => getNextState(timerType));
	};

	const toggleTimer = () => {
		if (!isRunning) {
			setStartTime(Date.now());
			setStartSeconds(time);
		}
		setIsRunning(!isRunning);
	};

	const reset = () => {
		setTime(timerStateTimes[timerType]);
		setIsRunning(false);
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<div className={styles.sectionTimer}>
			<div className={styles.backgroundTimer}>
				<div className={styles.typeTimes}>
					<div className={classNames(styles.typeTimeItem, { [styles.active]: timerType == "pomodoro" })}>
						{timerTypeTitles["pomodoro"]}
					</div>
					<div className={classNames(styles.typeTimeItem, { [styles.active]: timerType == "short" })}>
						{timerTypeTitles["short"]}
					</div>
					<div className={classNames(styles.typeTimeItem, { [styles.active]: timerType == "long" })}>
						{timerTypeTitles["long"]}
					</div>
				</div>
				<div className={styles.timer}>{formatTime(time)}</div>
				<div className={styles.controls}>
					<button className={styles.playPauseControl} onClick={toggleTimer}>
						{!isRunning ? <Play /> : <Pause />}
					</button>
					<button className={styles.restartControl} onClick={reset}>
						<Restart />
					</button>
				</div>
			</div>
		</div>
	);
}