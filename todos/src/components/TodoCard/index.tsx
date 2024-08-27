import { taskTypeIconHelper } from "../../models/TaskType";
import { Todo } from "../../models/Todo";

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => {
  return (
    <div>
      <div>
        <img src={taskTypeIconHelper(todo.taskType)} alt={todo.taskType} />
      </div>

      <div>
        <span>{todo.description}</span>
        <span>{todo.deadline.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default TodoCard;
