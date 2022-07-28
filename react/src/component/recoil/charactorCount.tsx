import { useRecoilValue } from "recoil";
import { charCountSelector } from "./tutorial1";

export const CharactorCount = () => {
  const count = useRecoilValue(charCountSelector);
  return <>Charactor Count : {count}</>;
};
