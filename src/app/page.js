"use client";
import Image from "next/image";
import { useState } from "react";
import { Checklist } from "./component/Task";
import { Button } from "./component/Button";
// import {Button} from ".//component/To-do";
export default function Home() {
  // const [displayText,setDisplayText]=useState([])
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [inputValue, setInputValue] = useState([]);
  const handleOnChange = (a) => {
    console.log("input changed", a.target.value);
    setInputValue(a.target.value);
  };
  const handleOnClick = () => {
    if (inputValue === "") return;
    setTodos([
      ...todos,
      { inputValue: inputValue, id: Math.random(), checked: false },
    ]);
    setInputValue("");
  };
  const DeleteTodo = (index) => {
    setTodos(todos.filter((el, i) => i !== index));
  };
  const completed = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id == id) todo.checked = !todo.checked;
      return todo;
    });
    setTodos(newArray);
    console.log(newArray);
  };
  const showActive = () => {
    setFilterType("Active");
  };
  const showAll = () => {
    setFilterType("All");
  };
  const showCompleted = () => {
    setFilterType("Completed");
  };
  const filterredTodos = todos.filter((todo) => {
    if (filterType == "All") {
      return true;
    } else if (filterType == "Active") {
      return !todo.checked;
    } else if (filterType == "Completed") {
      return todo.checked;
    }
    
  });
  
const completedCount = todos.filter((todo) => todo.checked).length;
const totalCount = todos.length;

const clearAllCompleted = () => {
  setTodos(todos.filter((todo) => !todo.checked));
};


  return (
    <div className="">
      <div className="min-h-screen w-full bg-black pt-4   flex justify-center ">
        <div className="w-[377px] h-fit border-[red] border-2 rounded  py- px-4  bg-white mt-6 ">
          <h1 className=" text-center mb-4 text-2xl font-semibold ">
            To-do-list
          </h1>

          <div className=" flex  gap-6   ">
            <input
              value={inputValue}
              className=" border-black border-2 rounded "
              type="text"
              placeholder="Add a new task..."
              onChange={handleOnChange}
            />

            <button
              onClick={handleOnClick}
              className="border-2 rounded py- px- bg-[#3C82F6]"
            >
              add
            </button>
          </div>
          <div>
            <Button
              showActive={showActive}
              showAll={showAll}
              showCompleted={showCompleted}
              filterType={filterType}
            ></Button>
          </div>

          <div className="mt-4 w-full flex flex-col mb-4 gap-4  ">
            {filterredTodos.map((todo, index) => (
              <Checklist
                completed={completed}
                key={index}
                index={index}
                tasks={todo}
                DeleteTodo={DeleteTodo}
                
              />
              
            ))}
          </div>  
            <div className="flex gap-10">

          {totalCount > 0 && (
  <p className="text-center text-gray-600 mt-4">
     {completedCount} of {totalCount} tasks completed
  </p>
)}
                {todos.some((todo) => todo.checked) && (
    <button
      onClick={clearAllCompleted}
      className=" text-sm text-red-600 hover:underline self-center mt-4"
    >
      🗑️ Clear Completed
    </button>
  )}
</div>
<div className="flex  justify-center gap-1.5">      
    <p className="text-center mb-4  self-center "> Powered by</p>
          <p className="text-center text-[#3C82F6] mb-4 hover:underline self-center ">  Temuujin HHK</p>
        </div>
        </div>
      </div>
    </div>
  );
}
