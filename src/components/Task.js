import React from "react";
import "../App.css";

const Task = (props) => {
  const style = { color: "maroon" };
  const { text, date, active, id, finishDate, important } = props.task;
  if (active) {
    return (
      <div className="activeTasks">
        <p>
          <strong style={important ? style : null}>{text}</strong> - do to:{" "}
          <span>{date}</span>
          <button onClick={() => props.change(id)}>Done task</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="doneTasks">
        <p>
          <strong>{text}</strong> (do to:{" "}
          <span>
            {date}) Date of done: {finish}
          </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
