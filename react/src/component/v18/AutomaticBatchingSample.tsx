import { useState } from "react";

const AutomaticBatchingSample = () => {
  // state
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // 複数のステートを更新する関数
  const update = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setFlag((prev) => !prev);
    }, 1000);
  };

  // レンダリングをコンソール出力
  console.log("render");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>AutomaticBatchingSample</h1>
      <hr />
      <p>
        {count}: {flag && "true"}
      </p>
      {/* update押下後のレンダリングがv.18だと1回 */}
      <button onClick={update}>update</button>
    </div>
  );
};

export default AutomaticBatchingSample;
