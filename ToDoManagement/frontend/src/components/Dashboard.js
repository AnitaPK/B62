import React, { useState } from "react";

const Dashboard = () => {
  const [taskName, setTaskName] = useState("Watching TV");
  const [taskOBJ, setTaskOBJ] = useState({});
  const [taskList, setTaskList] = useState([]);

  console.log(taskName);

  function handleAddTask(e) {
    e.preventDefault();
    console.log(taskName);
    setTaskList([...taskList, { tName: taskName, isComplete: false }]);
    const payload = { tName: taskName, isComplete: false };
    console.log(taskList);
  }

  // axios    useEffect()

  return (
    <>
      <div className="container mt-5 p-4 w-50 d-flex justify-content-between border">
        <div>
          <label>Add task name</label>

          <input type="text" onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <button className="btn btn-outline-success" onClick={handleAddTask}>
            +Add
          </button>
        </div>
      </div>
      <div className="container ">
        {taskList.length > 0 ? (
          <>
            {taskList.map((task, i) => (
              <div key={i} className="d-flex justify-content-around">
                <p>{task.tName}</p>
                <p>
                  <button>complete</button>
                  <button>Delete</button>
                </p>
              </div>
            ))}
          </>
        ) : (
          <p>No task added</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
