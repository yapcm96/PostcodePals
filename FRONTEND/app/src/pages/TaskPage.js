import { useState, useEffect } from 'react'


const TaskPage = (props) => {
  // pulls id from the url
  let id = props.match.params.id;

  // pull in the info from the database for the task with this id
  const [task, setTask] = useState();
  console.log(task);

  useEffect((id) => {
    const fetchFromAPI = async (id) => {
      const taskFromServer = await fetchTask(id);

      setTask(taskFromServer);
    };
    fetchFromAPI(id);
  },[]);

  // write fetchTask func
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/4`, {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      
    });
    const data = await res.json();

    return data;
  };
    
  return (
    <div>
      <h1>hello task page</h1>
      <h2>{id}</h2>
      
    </div>
  )
}

export default TaskPage
