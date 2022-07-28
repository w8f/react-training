import Layout from "../layout";
import { atom, selector } from "recoil";
import { TextInput } from "./textInput";
import { CharactorCount } from "./charactorCount";

/**
 * Atomは状態の断片を表します。Atomは、どのコンポーネントからでも読み書きができる。
 * Atomの値を読み取るコンポーネントは、暗黙のうちにそのAtomを購読しているので、
 * Atomの更新は、そのAtomを購読しているすべてのコンポーネントの再レンダリングにつながります。
 */
export const textState = atom({
  key: "textState",
  default: "",
});

/**
 * Selectorは、派生した状態の一部を表します。
 * 派生状態とは、状態の変換のことです。
 * 派生状態は、与えられた状態を何らかの方法で変更する純粋な関数に状態を渡したときの出力と考えることができます。
 */
export const charCountSelector = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const Tutorial1 = () => {
  return (
    <Layout title="recoilを使ったサンプル1">
      <div className="mt-10">
        <TextInput />
        <CharactorCount />
      </div>
    </Layout>
  );
};

export default Tutorial1;
