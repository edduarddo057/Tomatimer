"use client";

import { useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import AddIcon from '@mui/icons-material/Add';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from "@/app/_types";
import { useTaskListStore } from "@/app/_store";

export default function Tasks() {
	const [addingTask, setAddingTask] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const { tasks, addTask, removeTask, toggleTaskCheck } = useTaskListStore();

	const onClickCancelAddTask = () => {
		setAddingTask(false);
		setValue('');
	}

	const onClickAddTask = () => {
		addTask(value);
		setAddingTask(false);
		setValue('');
	}

	const renderTask = (task: Task) => {
		const { id, name, checked } = task;
		return (
			<div
				key={id}
				className={classNames(styles.itemList, { [styles.active]: checked })}
				onClick={() => toggleTaskCheck(id)}
			>
				{checked ? <RadioButtonCheckedIcon sx={{ fontSize: 24, color: '#b81714' }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: 24, color: '#b81714' }} />}
				<div className={classNames(styles.labelItem, { [styles.active]: checked })}>
					{name}
				</div>
				<button onClick={() => removeTask(id)}>
					<DeleteIcon sx={{ fontSize: 20, color: '#b81714' }} />
				</button>
			</div>
		);
	}

	const renderAddingTask = () => {
		return (
			<div className={styles.itemInput}>
				<input
					type="text"
					maxLength={20}
					className={styles.input}
					placeholder="Insira sua tarefa"
					value={value}
					onChange={ev => setValue(ev.target.value)} />
				<button onClick={onClickCancelAddTask}>
					<CloseIcon sx={{ fontSize: 24, color: '#b81714' }} />
				</button>
				<button onClick={onClickAddTask}>
					<CheckIcon sx={{ fontSize: 24, color: '#b81714' }} />
				</button>
			</div>
		);
	}

	return (
		<div className={styles.sectionTask}>
			<div className={styles.taskContainer}>
				<div className={styles.titleTask}>Tarefas</div>
				{tasks.map((task) => renderTask(task))}
				{addingTask && renderAddingTask()}
				<button className={styles.addItem} onClick={() => setAddingTask(true)} disabled={addingTask}>
					<div className={styles.iconAdd}>
						<AddIcon sx={{ fontSize: 24, color: '#b81714' }} />
					</div>
					<div className={styles.addItemLabel}>Adicionar Tarefa</div>
				</button>
			</div>
		</div>
	);
}