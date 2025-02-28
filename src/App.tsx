import './App.css'
import {TodolistItem} from "./components/todolistItem.tsx";
import {TaskType} from "./types.ts";

export const App = () => {

  const tasks1: TaskType[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ]

  const tasks2: TaskType[] = []

  return (
      <div className="app">
        <TodolistItem title={"What to learn"} tasks={tasks1} date={"2025-02-28"}/>
        <TodolistItem title={"Songs"} tasks={tasks2}/>
      </div>
  )
}
