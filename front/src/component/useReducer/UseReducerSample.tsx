import { VFC, useReducer } from "react";

type State = {
  count: number;
};

type ActionType = {
  type: "increment" | "decrement";
};

const UseReducerSample: VFC = () => {
  const initialState = { count: 0 };

  // reducer関数を定義する。
  // actionごとにstateに対する処理を記載
  const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  // useReducerを呼び出す。
  // 第一引数にreducer関数、第二引数に初期値のステートを指定する。
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useReducer Sample</h1>
      <hr />
      <p>count: {state.count}</p>
      <button
        style={{ margin: 3 }}
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        style={{ margin: 3 }}
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseReducerSample;
