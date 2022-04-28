import { FC, useState } from "react";

type Todo = {
  text: string;
};

const UseStateSample: FC = () => {
  /** state */
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([{ text: "Learn hooks" }]);

  return (
    <div>
      <h1>number</h1>
      <p>{count} click</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      {/*
        関数型の更新
        新しい state が前の state に基づいて計算される場合
      */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click
      </button>
      <hr />

      <h1>string</h1>
      <p>{text ? text : "何も入力されていません"}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <hr />

      <h1>List</h1>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo.text}</li>
      ))}
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, { text: todo }]);
        }}
      >
        add Todo
      </button>
    </div>
  );
};

export default UseStateSample;
