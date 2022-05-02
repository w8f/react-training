import { FC, useState } from "react";

const labels = ["label1", "label2", "label3"];

const HooksWithJSX: FC = () => {
  //   const [checkList, setCheckList] = useState([false, false, false]);
  //   const isAllChecked = checkList.every((x) => x);
  //   const handleCheckList = (index: number) => {
  //     setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  //   };
  const [isAllChecked, renderChecks] = useChecks(labels);
  return (
    <div className="bg-stone-100 h-screen text-center">
      <h1 className="inline-block m-10 text-2xl">HooksWithJSX Sample</h1>

      <div className="mt-4">
        {renderChecks()}
        <div className="mt-4">
          <button
            className="bg-white border-gray-300 border-2 rounded-xl p-2 hover:bg-gray-100 disabled:opacity-75 disabled:bg-gray-100"
            disabled={!isAllChecked}
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};
type Props = {
  checkList: boolean[];
  labels: string[];
  onCheck: (index: number) => void;
};

type UseCheckResult = [boolean, () => JSX.Element];

/**
 * 第一段階、コンポーネントに切り出す。
 * @param checkList
 * @param labels
 * @param onCheck
 */
export const Checks: FC<Props> = ({ checkList, labels, onCheck }) => {
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx} className="list-none m-1">
          <label>
            <input
              type="checkbox"
              className="mr-3"
              checked={checkList[idx]}
              onClick={() => onCheck(idx)}
            ></input>
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

/**
 * 第二段階、カスタムフックに切り出す。
 * @param labels
 */
export const useChecks = (labels: string[]): UseCheckResult => {
  const [checkList, setCheckList] = useState(labels.map(() => false));
  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };
  const isAllChecked = checkList.every((x) => x);
  const renderChecks = () => (
    <>
      <Checks
        checkList={checkList}
        labels={labels}
        onCheck={handleCheckClick}
      />
      <p className="mt-4">{JSON.stringify(checkList)}</p>
    </>
  );
  return [isAllChecked, renderChecks];
};
export default HooksWithJSX;
