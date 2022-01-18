import { ITask } from "../interfaces";

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="taskContent">
        <p>{task.taskName}</p>
        <p>{task.deadline}</p>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoTask;
