import { useRecoilState } from "recoil";
import { textState } from "./tutorial1";

export const TextInput = () => {
  /**
   * Atomからの読み取りとAtomへの書き込みが必要なコンポーネントは、
   * 以下のようにuseRecoilState()を使用する
   */
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <input
        className="border-2 m-2"
        type="text"
        value={text}
        onChange={onChange}
      />
      <br />
      <p className="text-2xl">Echo {text}</p>
    </>
  );
};
