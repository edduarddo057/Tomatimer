import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerConfig = {
	pomodoroMinutes: number;
	shortMinutes: number;
	longMinutes: number;
	numberOfRounds: number;
	autoStartBreak: boolean;
	autoStartWork: boolean;
};

export const defaultTimerConfig: TimerConfig = {
	pomodoroMinutes: 25,
	shortMinutes: 5,
	longMinutes: 15,
	numberOfRounds: 4,
	autoStartBreak: false,
	autoStartWork: false,
};

interface TimerConfigState {
	timerConfig: TimerConfig;
	setTimerConfig: (timerConfig: TimerConfig) => void;
}

export const useTimerConfigStore = create<TimerConfigState>()(
	persist(
		(set) => ({
			timerConfig: defaultTimerConfig,
			setTimerConfig: (timerConfig: TimerConfig) => {
				set({ timerConfig });
			},
		}),
		{
			name: "timer-config",
		}
	)
);