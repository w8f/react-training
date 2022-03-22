import { VFC } from "react";
import {
  CountProvider,
  useCountContext,
} from "../useContext/context/useContext";

export const UseContextSample: VFC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useContext sample</h1>
      {/* 値を渡したいコンポーネントをcontext.Providerで囲む */}
      <CountProvider>
        <ComponentA />
      </CountProvider>
      <hr />
    </div>
  );
};

const ComponentA: VFC = () => {
  const { count } = useCountContext();
  return (
    <>
      <p>Component A</p>
      <p>{count}</p>
      <ComponentB />
    </>
  );
};

const ComponentB: VFC = () => {
  const { count, setCount } = useCountContext();
  return (
    <>
      <p>Component B</p>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <ComponentC />
    </>
  );
};

const ComponentC: VFC = () => {
  const { countDown } = useCountContext();
  return (
    <>
      <p>Component C</p>
      <button onClick={() => countDown()}>-</button>
    </>
  );
};
export default UseContextSample;
