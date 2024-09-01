import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TimerConfig } from "./_types";
import { defaultTimerConfig } from "./_config";

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