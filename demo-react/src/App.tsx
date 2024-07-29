import React from "react";
import { useState } from 'react'
import './App.css'
import InputField from "./Components/InputField";
import { Todo } from "./model"
import TodoList from "./Components/TodoList";

// let name: string = "John";
// let name: string;
// let age: number|string;
// let isStudent: boolean;
// let hobbies: string[];
// let role:[number,string];
// let personName: unknown;
// // let person:Object; // not recomended

// interface Person  { //create object
//   name: string,
//   age?: number;
// };

// let person: Person = {
//   name:"John",
//   age:15
// }

// let manyPeople:Person[];

// let printName:(x:string,y:number) => void = function(
//   name:string,
//   age: number
// ):void{
//   console.log("name is "+name+" age is "+ age)
// }

// printName("John",12);

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo){
      setTodos([...todos,{id:Date.now(),todo ,isDone:false}])
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos = {todos} setTodos={setTodos}/>
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App
