import { createContext, useContext, useState } from "react";

// context作成
const CountContext = createContext(
  {} as {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    countDown: () => void;
  }
);

export const useCountContext = () => {
  return useContext(CountContext);
};

export const CountProvider = ({ children }: { children: JSX.Element }) => {
  const [count, setCount] = useState(100);
  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  const value = {
    count,
    setCount,
    countDown,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};
