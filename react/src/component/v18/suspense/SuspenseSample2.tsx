import { FC, Suspense } from "react";

const dataMap: Map<string, unknown> = new Map();

const fetchData = async () => {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useData = <T,>(cacheKey: string, fetch: () => Promise<T>): T => {
  const cachedData = dataMap.get(cacheKey) as T | undefined;
  if (cachedData === undefined) {
    throw fetch().then((d) => {
      dataMap.set(cacheKey, d as T);
    });
  }
  return cachedData;
};

export const DataLoader: FC = () => {
  const data = useData("Dataloader1", fetchData);
  return <div>Data is {data}</div>;
};

const DataLoader2: React.FC = () => {
  const data = useData("DataLoader2", fetchData);
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
const SuspenseSample2: FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>suspense sample 2</h1>
      <hr />
      <Suspense fallback={<p>...loading</p>}>
        <DataLoader />
        <DataLoader2 />
      </Suspense>
    </div>
  );
};

export default SuspenseSample2;
