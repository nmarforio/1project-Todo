import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // void doesn't return anything
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); // useRef is like document.getelement(Id) is to refer to a specific HTML component
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a Task"
        className="input_box"
        ref={inputRef} // useRef
      ></input>
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;
