import { FC } from "react";
import { useCount } from "./useCount";

const CustomHooksTest: FC = () => {
  const { count, increment, decrement, reset } = useCount();
  return (
    <div className="text-center min-h-screen bg-stone-50">
      <h1 className="mt-10 text-2xl inline-block">customHooks test</h1>
      <p className="mt-4">count is ... {count}</p>
      <div className="mt-4 flex justify-center items-center">
        <button
          className="m-3 p-2 pl-4 pr-4 border rounded-sm bg-white"
          onClick={increment}
        >
          +
        </button>
        <button
          className="m-3 p-2 pl-4 pr-4 border rounded-sm bg-white"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="m-3 p-2 pl-4 pr-4 border rounded-sm bg-white"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default CustomHooksTest;
