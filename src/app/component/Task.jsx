import React from "react";

export function Checklist(props) {
  const { DeleteTodo, index, tasks, completed } = props;
  return (
    <div>
      <div className="flex w-[345px] h-[62px] p-[16px] justify-between items-center  border-black border-2  rounded-[6px]">
        <div className="flex items-center gap-[10px]">
          <input
            type="checkbox"
            checked={tasks.checked}
            onChange={() => {
              completed(tasks.id);
            }}
            className="w-[20px] h-[20px] bg-[#0f0f11] rounded-[2px] border-[#080807]"
          />
          <p className={"text-[#000]"}>{tasks.inputValue}</p>
        </div>
        <button
          onClick={() => DeleteTodo(index)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer text-[#231d1d]  border-black border-2  text-[]"
        >
          🧨
        </button>
      </div>
    </div>
  );
}
