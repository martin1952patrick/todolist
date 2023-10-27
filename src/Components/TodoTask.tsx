import React from "react";
import { ITask } from "../Interfaces";
import copy from 'clipboard-copy'; // Import clipboard-copy

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
          
        }}
      >
        Delete
      </button>
      // Inside your TodoTask component
<button onClick={() => props.copyToClipboard(props.task.taskName)}>Copy</button>



    </div>
  );
};

export default TodoTask;
