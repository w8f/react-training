import { useState, useEffect } from "react";
import Users, { User } from "../../logic/Users";

/**
 * debugger文のサンプル
 * @see https://qiita.com/a_ya_ka/items/b5160cd7d592931d7507
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/debugger
 */
const Debugger = () => {
  const [counter, setCounter] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    Users.all().then((d) => {
      setUsers(d);

      // 下記は同じ表示になる
      console.log("%O", d);
      console.dir(d);
    });
  }, []);

  return (
    <div className="bg-stone-50 text-center min-h-screen">
      <h1 className="text-2xl mt-10 inline-block">debugger sample</h1>
      <div className="mt-2">
        <p>{counter}</p>
      </div>
      <div className="mt-4">
        <button
          className="bg-white border-2 p-2 rounded-md"
          onClick={() => {
            setCounter((prev) => prev + 1);
            potentiallyBuggyCode(counter);
          }}
        >
          Function Start
        </button>
      </div>
    </div>
  );
};

const potentiallyBuggyCode = (counter: number) => {
  console.log("buggy code start");
  let hoge = "start";
  // debugger文で処理が停止する。
  debugger;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hoge = "end";
  debugger;
};

export default Debugger;
