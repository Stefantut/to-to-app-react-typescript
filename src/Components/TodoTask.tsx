import { ITask } from "../interfaces";

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div className="task">
      {task.taskName} - {task.deadline}
    </div>
  );
};

export default TodoTask;
