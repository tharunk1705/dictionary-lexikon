import React from "react";

const FormInput = ({ error, handleKeywordChange, handleSearch }) => {
  const handleChange = (event) => {
    handleKeywordChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="w-full flex flex-col justify-center items-center my-4 gap-y-2">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-4/5 flex justify-between  rounded-md bg-neutral-700  items-center"
      >
        <input
          type="text"
          placeholder="type a word here to get its meaning"
          autoComplete="off"
          className="w-full shrink p-4 rounded-md outline-none border-0 text-white placeholder:text-neutral-500 bg-transparent "
          onChange={(e) => handleChange(e)}
        />
        <button className="text-neutral-500 active:scale-90 p-4" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <span className="w-4/5 text-red-400 text-sm">{error}</span>
    </div>
  );
};

export default FormInput;
