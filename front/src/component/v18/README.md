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

上記のサンプルコードの場合、\
v17 までは、count の更新、flag の更新で 2 回レンダリングが走っていましたが、\
v18 からは、このレンダリングがまとめて 1 回で済むようになります。

## 新機能 2. Transitions

Transition は更新の**緊急**・**非緊急**を区別するために使用されます。\
ここで言う更新の緊急とは、タイプする、クリックする、押すなどのユーザの操作に伴う動作です。\
この緊急のアクションはすぐに反映される必要があるが、実際は多少の遅延を伴う。\
⇔ 状態の更新により、コンポーネントが一時停止する場合に、その状態の更新処理を **transition** を用いてラップする。

下記で後述する **useTransition** フックは、\
このコンテンツの読み込みによる遅延をユーザ側に知らせることができ、\
コンポーネントが好ましくない読み込み状態を回避できるようになる。

緊急の更新と非緊急の更新で分けることによって、緊急の更新時に、非緊急の更新処理を中断することができる。\
⇔ ユーザの入力（緊急の更新）で、古いレンダリング作業を破棄し、最新の更新のみをレンダリングするようになる。

更新をトランジションとしてマークすることで、React に非緊急の更新を中断できることを伝え、\
すでに表示されているコンテンツの Suspension フォールバックに戻ることを回避できる。

結論：Transition の機能を効果的に用いることで、UX の向上につながる！

### useTransition

v.18 で新たに追加された hooks

基本形

```js
const [isPending, startTransition] = useTransition();
```

第一引数 **isPending** は、トランジションが終了するのを待つのかどうかを React が通知します\
第二引数 **startTransition** は、遅延可能な状態更新を引き起こすコールバック関数。

startTransition の処理が完了し、画面が再レンダリングされているときに、isPending が true になる。\
画面再レンダリング中に表示したいものを isPending と一緒に使用できるイメージ。\
⇔ ユーザーは更新をレンダリングしている間、現在のコンテンツとのインタラクションを継続することができます。

```js
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
```

### React.startTransition

useTransition が使用できない場合に、その代替手段として設計されたメソッド。
※pending の状態を示すフラグは含まれていない。
<https://reactjs.org/docs/react-api.html#starttransition>

## Suspense の新機能

Suspense 自体は v.16 以降からサポートしていたが、\
v.18 では、サーバー上での Suspense をサポートし、並行レンダリング機能を用いてその機能が拡張された。

**サスペンド**とは、

1. コンポーネントがレンダリング中（関数コンポーネントの関数本体を実行中）に
2. Promise が throw された場合に発生する。

通常サスペンドが発生した場合は、画面全体が真っ白になる（レンダリングができない状態になる）が、\
Suspense タグ内でサスペンドを検知した場合は、Suspense の fallback に指定された要素が代わりに出力される。\
サスペンド解除時はサスペンドした Suspense の中身が再レンダリングされる

最初のレンダリングでサスペンドしたコンポーネントはステートなどを保持できない。\
マウント済みのコンポーネントがサスペンドした場合、Promise 解決による再レンダリング以外にステート更新などによる再レンダリングでもサスペンドが解除される。\
再レンダリング時にサスペンドした場合、その再レンダリングの最中にコンポーネントの記憶領域に書き込まれたものは失われる。(SuspenseSample.tsx の例)

⇔suspense 内のコンポーネントを初手でサスペンドするためには、データを外部に持つ必要がある\
(SuspenseSample2.tsx の例)

<https://zenn.dev/uhyo/books/react-concurrent-handson>
