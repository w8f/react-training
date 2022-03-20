import { VFC, useRef } from "react";

const UseRefSample: VFC = () => {
  /** ref */
  // nullを指定することで、readonlyになる（=currentは書き換えられない）
  const inputRef = useRef<HTMLInputElement>(null);

  const numRef = useRef(0);

  return (
    <div>
      <h1>useRef sample</h1>
      {/**
       * 1. DOM やコンポーネントにアクセスする手段として使うとき
       */}
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          // useRef とは、書き換え可能な値を
          // .current プロパティ内に保持することができる「箱」のようなもの
          inputRef.current && inputRef.current.focus();
        }}
      >
        Focus on Input
      </button>

      <hr />

      <button
        onClick={() => {
          numRef.current++;
          console.log(numRef.current);
        }}
      >
        click
      </button>
    </div>
  );
};

export default UseRefSample;
