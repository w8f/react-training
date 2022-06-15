import { useState, useCallback, useContext, createContext } from "react";

const CounterStepContext = createContext(1);

export const useCountContext = () => {
  return useContext(CounterStepContext);
};

export const CounterStepProvider = ({
  children,
  step,
}: {
  children: JSX.Element;
  step: number;
}) => {
  return (
    <CounterStepContext.Provider value={step}>
      {children}
    </CounterStepContext.Provider>
  );
};

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const step = useCountContext();

  const increment = useCallback(() => {
    setCount((prev) => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount((prev) => prev - step);
  }, [step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const incrementAsync = useCallback(() => {
    setTimeout(() => increment(), 1000);
  }, [increment]);

  if (count > 9000) {
    throw new Error("It's over 9000!");
  }

  return { count, increment, incrementAsync, decrement, reset };
};
