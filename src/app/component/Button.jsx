import React from "react";
export function Button({ showAll, showActive, showCompleted, filterType }) {
  return (
    <div className="flex gap-6 mt-2">
      <button
        onClick={showAll}
        className={`border-2 rounded py- px-3   ${
          filterType == "All" ? "bg-[#6a94e7]" : "bg-[#F3F4F6]"
        }`}
      >
        All
      </button>
      <button
        onClick={showActive}
        className={`border-2 rounded py- px-3   ${
          filterType == "Active" ? "bg-[#6a94e7]" : "bg-[#F3F4F6]"
        }`}
      >
        Active
      </button>
      <button
        onClick={showCompleted}
        className={`border-2 rounded py- px-3   ${
          filterType == "Completed" ? "bg-[#6a94e7]" : "bg-[#F3F4F6]"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
