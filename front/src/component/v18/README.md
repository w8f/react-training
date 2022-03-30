# React.v18 新機能

## 新機能 1. Auto Batching

一言でいうと、**複数回の状態更新**を 1 回の再レンダリングにまとめる機能になります。

これまで（React.v17 まで）
状態更新を検知するたびにレンダリングしていた（v.17 まで）

v.18 からは、、
プロミス、setTimeout、ネイティブイベントハンドラ内の処理が完了してから、\
変更をまとめて 1 回で再レンダリング。

```js
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
```
