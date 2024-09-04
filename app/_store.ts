import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, TimerConfig } from "./_types";
import { defaultTimerConfig } from "./_config";
import { v4 as uuidv4 } from 'uuid';

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

interface TaskListState {
	tasks: Task[];
	addTask: (name: string) => void;
	removeTask: (id: string) => void;
	toggleTaskCheck: (id: string) => void;
}

export const useTaskListStore = create<TaskListState>()(
	persist(
		(set, get) => ({
			tasks: [],
			addTask: (name: string) => {
				const { tasks } = get();
				const newTask = {
					id: uuidv4(),
					name,
					checked: false,
				};
				set({ tasks: [...tasks, newTask] });
			},
			removeTask: (id: string) => {
				const { tasks } = get();
				set({ tasks: tasks.filter((task) => task.id !== id) });
			},
			toggleTaskCheck: (id: string) => {
				const { tasks } = get();
				set({
					tasks: tasks.map((task) =>
						task.id === id ? { ...task, checked: !task.checked } : task
					),
				});
			},
		}),
		{
			name: "task-list",
		}
	)
);