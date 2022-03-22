import { VFC, createContext, useContext, useState } from "react";

// Contextを作成する。
export const UserCountContext = createContext(
  {} as {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }
);

export const UseContextSample: VFC = () => {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useContext sample</h1>
      {/* 値を渡したいコンポーネントをcontext.Providerで囲む */}
      <UserCountContext.Provider value={value}>
        <ComponentA />
      </UserCountContext.Provider>
      <hr />
    </div>
  );
};

const ComponentA: VFC = () => {
  return (
    <>
      <p>Component A</p>
      <ComponentB />
    </>
  );
};

const ComponentB: VFC = () => {
  return (
    <>
      <p>Component B</p>
      <ComponentC />
    </>
  );
};

const ComponentC: VFC = () => {
  const { count, setCount } = useContext(UserCountContext);
  return (
    <>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};
export default UseContextSample;
