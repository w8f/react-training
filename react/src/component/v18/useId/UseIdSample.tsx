import { FC, useId } from "react";

const UseIdSample: FC = () => {
  const id = useId();
  return (
    <div className="text-center">
      <h1>useId sample</h1>
      <p>useId value is {id}</p>
    </div>
  );
};

export default UseIdSample;
