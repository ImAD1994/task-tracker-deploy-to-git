import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  const [showAdd,setShowAdd] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id:1,
        text: 'face time with mom',
        day: 'Feb 7th at 9.30AM UK time',
        remainder: true
    },
    {
        id:2,
        text: 'go for running',
        day: 'Feb 7th at 3.30PM UK time',
        remainder: true
    },
    {
        id: 3,
        text: 'cook food',
        day: 'Feb 7th at 4.30PM UK time',
        remainder: false
    }
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id,...task }
  setTasks([...tasks,newTask ])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

//change remainder on double click
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ? {...task, remainder:
    !task.remainder } : task
  ));
}

  return (
    <Router>
    <div className="container">
      <Header onAdd= {() => setShowAdd(!showAdd)}
      showAddTask = {showAdd} />
      <Route path='/' exact render={() =>(
        <>
          {showAdd && <AddTask  onAdd = {addTask}/>}
          {tasks.length>0 ? 
          <Tasks tasks= {tasks} onDelete= {deleteTask} onToggle = {toggleReminder}/>
          :' No Task Available'}
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
