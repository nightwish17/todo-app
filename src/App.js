import {GiHornedHelm} from "react-icons/gi";
import {AiOutlinePlus, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        const addTask = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            completed: false
        }
        if (input.trim().length) {
            setTasks([...tasks, addTask])
        }
        setInput('')
    }

    const deleteTask = (id) => {
        let filteredTask = [...tasks].filter((tasks) => tasks.id !== id)
        setTasks(filteredTask)
    }

    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task => (
                task.id === id ? {...task, completed: !task.completed} : task
            ))
        )
    }

    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
    <div className="app">
      <div className="container">
          <h1><GiHornedHelm /> Todo List</h1>

      <div className='date'>
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{month[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
      </div>

          <form onSubmit={handleSubmit}>
              <div className="form-input">
                  <AiOutlinePlus className='icon' onClick={handleSubmit}/>
                  <input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      type="text"
                      placeholder='Enter a task'
                  />
              </div>
          </form>

          <div>
              {tasks.map(task => (
                  <div
                      className={`task-row ${task.completed ? 'completed' : ''}`}
                      key={task.id}
                  >
                      <p onClick={() => toggleComplete(task.id)}>{task.text}</p>
                      <AiOutlineClose onClick={() => deleteTask(task.id)} className='icon' />
                  </div>
              ))}
          </div>
          <p className='length'>{(tasks) < 1 ? 'You have no tasks' : `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;
