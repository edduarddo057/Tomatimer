export type TimerConfig = {
	pomodoroMinutes: number;
	shortMinutes: number;
	longMinutes: number;
	numberOfRounds: number;
};

export type Task = {
	id: string;
	name: string;
	checked: boolean;
};