import { VFC, Suspense, useState, useMemo } from "react";

type Props = {
  name: string;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const SometimesSuspend: VFC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>hello world</p>;
};

const RenderingNotifier: VFC<Props> = ({ name }) => {
  console.log(`${name} was rendered`);
  return null;
};

const DataLoader: VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  // loading is trueは2回表示される。
  // 再レンダリングでサスペンドした場合、
  // 再レンダリング最中にコンポーネントの記憶領域に書き込まれたものは失われる。
  //（メモ化した内容が捨てられる）
  const _ = useMemo(() => {
    if (loading) {
      console.log("loading is true");
    }
    return 1;
  }, [loading]);

  if (loading && data == null) {
    // マウント済みのコンポーネントがサスペンドした場合、
    // Promise 解決による再レンダリング以外に
    // ステート更新などによる再レンダリングでもサスペンドが解除される。
    sleep(500).then(() => setData("boom"));
    throw fetchData().then(setData);
  }
  return (
    <>
      <h1>Data is {data}</h1>
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        load
      </button>
    </>
  );
};

const fetchData = async () => {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};

const SuspenseSample: VFC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>suspense sample</h1>
      <hr />
      <RenderingNotifier name="outside-suspense" />
      {/* suspend解除時に、suspendの中身が再レンダリングされる。 */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <RenderingNotifier name="inside-suspense" />
        <SometimesSuspend /> */}
        <DataLoader />
      </Suspense>
    </div>
  );
};

export default SuspenseSample;
