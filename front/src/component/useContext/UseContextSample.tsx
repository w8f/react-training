import { VFC, createContext, useContext } from "react";

// Contextを作成する。
export const UserCount = createContext(0);

export const UseContextSample: VFC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useContext sample</h1>
      {/* 値を渡したいコンポーネントをcontext.Providerで囲む */}
      <UserCount.Provider value={100}>
        <ComponentA />
      </UserCount.Provider>
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
  const count = useContext(UserCount);
  return (
    <>
      <p>Component C</p>
      <p>{count}</p>
    </>
  );
};
export default UseContextSample;
