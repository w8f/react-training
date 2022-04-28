import { FC, createContext, useContext } from "react";

// Contextを作成する。
export const UserCount = createContext(0);

export const UseContextSample: FC = () => {
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

const ComponentA: FC = () => {
  return (
    <>
      <p>Component A</p>
      <ComponentB />
    </>
  );
};

const ComponentB: FC = () => {
  return (
    <>
      <p>Component B</p>
      <ComponentC />
    </>
  );
};

const ComponentC: FC = () => {
  const count = useContext(UserCount);
  return (
    <>
      <p>Component C</p>
      <p>{count}</p>
    </>
  );
};
export default UseContextSample;
