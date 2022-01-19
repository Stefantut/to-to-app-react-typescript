import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="taskContent">
        <p>{task.taskName}</p>
        <p>{task.deadline}</p>
      </div>
      <button onClick={() => deleteTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
