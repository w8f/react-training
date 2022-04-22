import { FC } from "react";
import {
  CountProvider,
  useCountContext,
} from "../useContext/context/useContext";

export const UseContextSample: FC = () => {
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

const ComponentA: FC = () => {
  const { count } = useCountContext();
  return (
    <>
      <p>Component A</p>
      <p>{count}</p>
      <ComponentB />
    </>
  );
};

const ComponentB: FC = () => {
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

const ComponentC: FC = () => {
  const { countDown } = useCountContext();
  return (
    <>
      <p>Component C</p>
      <button onClick={() => countDown()}>-</button>
    </>
  );
};
export default UseContextSample;
