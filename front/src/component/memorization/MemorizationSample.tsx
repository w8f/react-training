import React, { VFC, useState, useCallback, memo, useMemo } from "react";

type ButtonProps = {
  handleClick: () => void;
  text: string;
};

type CountProps = {
  addNum: number;
  text: string;
};

// React.memoは、メモ化したいコンポーネントをラップして使う。
const Button = memo(({ handleClick, text }: ButtonProps) => {
  console.log("Button child component: ", text);
  return <button onClick={handleClick}>{text}</button>;
});

const Count = memo(({ addNum, text }: CountProps) => {
  console.log("Count child component: ", text);
  return (
    <p>
      {addNum}: {text}
    </p>
  );
});

const Title = React.memo(() => {
  console.log("Title component");
  return <h1>UseCallback Sample</h1>;
});

const MemorizationSample: VFC = () => {
  const [firstCountState, setFirstCount] = useState(0);
  const [secondCountState, setSecondCount] = useState(10);
  const [thirdCountState, setThirdCount] = useState(0);

  const add_5 = useCallback(
    () => setFirstCount(firstCountState + 5),
    [firstCountState]
  );
  const add_10 = useCallback(
    () => setSecondCount(secondCountState + 10),
    [secondCountState]
  );

  const add_100 = () => setThirdCount(thirdCountState + 100);

  // 重い処理の結果をメモ化
  const weightFunction = useMemo(() => {
    let i = 0;
    while (i < 10) {
      i++;
    }
    return thirdCountState * thirdCountState;
  }, [thirdCountState]);

  return (
    <div style={{ textAlign: "center" }}>
      <Title />
      <hr />
      <Count addNum={firstCountState} text={"+5 増加ボタン"} />
      <Count addNum={secondCountState} text={"+10 増加ボタン"} />
      <p>WeightFunction result: {weightFunction}</p>
      <Button handleClick={add_5} text={"+5"} />
      <Button handleClick={add_10} text={"+10"} />
      <button onClick={add_100}>+100</button>
    </div>
  );
};

export default MemorizationSample;
