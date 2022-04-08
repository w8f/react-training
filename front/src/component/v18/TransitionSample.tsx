import { VFC, useTransition, useState } from "react";

/**
 * useTransitionサンプル
 */
const TransitionSample: VFC = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // startTransition内の処理は、非緊急（transition）として扱われる
    startTransition(() => {
      console.log("start transition");
      setCount((c) => c + 1);
      console.log("transition end");
    });
  };

  // isPendingの状態をコンソール出力
  // --画面レンダリング--
  // 初期値 false
  // >> start transition
  // >> transition end
  // true
  // -- 画面再レンダリング --
  // false
  console.log(isPending);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Transition sample</h1>
      <hr />
      {/* 画面レンダリング中にpendingを表示させる */}
      {isPending && <p>pending</p>}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default TransitionSample;
